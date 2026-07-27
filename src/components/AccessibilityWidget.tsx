import React, { useEffect, useState, useCallback } from 'react';

type ColorBlindMode = 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';

interface A11ySettings {
  colorBlindMode: ColorBlindMode;
  highContrast: boolean;
  increaseContrast: boolean;
  largeText: boolean;
  reduceMotion: boolean;
  focusHighlight: boolean;
}

const DEFAULT_SETTINGS: A11ySettings = {
  colorBlindMode: 'none',
  highContrast: false,
  increaseContrast: false,
  largeText: false,
  reduceMotion: false,
  focusHighlight: false,
};

const STORAGE_KEY = 'pw-a11y-settings';

function loadSettings(): A11ySettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    /* ignore malformed storage */
  }
  return DEFAULT_SETTINGS;
}

function applySettings(settings: A11ySettings) {
  const root = document.documentElement;

  // Color blind simulation/correction filters — only active when a mode is selected
  root.setAttribute('data-a11y-colorblind', settings.colorBlindMode);

  root.classList.toggle('a11y-high-contrast', settings.highContrast);
  root.classList.toggle('a11y-increase-contrast', settings.increaseContrast);
  root.classList.toggle('a11y-large-text', settings.largeText);
  root.classList.toggle('a11y-reduce-motion', settings.reduceMotion);
  root.classList.toggle('a11y-focus-highlight', settings.focusHighlight);
}

/**
 * Self-contained accessibility layer.
 * - Does NOT alter existing markup, colors, or layout.
 * - All effects are OFF by default; enabling a toggle adds a class/attribute
 *   on <html> that scoped CSS (injected below) reacts to.
 * - Selected preferences persist in localStorage and re-apply on load.
 *
 * Usage: render <AccessibilityWidget /> once near the root of the app
 * (e.g. in App.tsx, alongside your routes), it is fixed-position and
 * floats above all pages.
 */
export const AccessibilityWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    const loaded = loadSettings();
    setSettings(loaded);
    applySettings(loaded);
  }, []);

  const update = useCallback((partial: Partial<A11ySettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...partial };
      applySettings(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore storage errors (e.g. private browsing) */
      }
      return next;
    });
  }, []);

  const resetAll = () => {
    applySettings(DEFAULT_SETTINGS);
    setSettings(DEFAULT_SETTINGS);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SETTINGS));
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      {/* Hidden SVG filter definitions used by color blind modes */}
      <svg className="a11y-svg-filters" aria-hidden="true" focusable="false">
        <defs>
          <filter id="a11y-protanopia">
            <feColorMatrix
              type="matrix"
              values="0.567,0.433,0,0,0
                      0.558,0.442,0,0,0
                      0,0.242,0.758,0,0
                      0,0,0,1,0"
            />
          </filter>
          <filter id="a11y-deuteranopia">
            <feColorMatrix
              type="matrix"
              values="0.625,0.375,0,0,0
                      0.7,0.3,0,0,0
                      0,0.3,0.7,0,0
                      0,0,0,1,0"
            />
          </filter>
          <filter id="a11y-tritanopia">
            <feColorMatrix
              type="matrix"
              values="0.95,0.05,0,0,0
                      0,0.433,0.567,0,0
                      0,0.475,0.525,0,0
                      0,0,0,1,0"
            />
          </filter>
        </defs>
      </svg>

      {/* Scoped styles — only affect the page when a toggle below is enabled */}
      <style dangerouslySetInnerHTML={{ __html: A11Y_STYLES }} />

      {/* Floating toggle button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Accessibility options"
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-primary text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-300"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="4" r="1.6" fill="currentColor" stroke="none" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 8c2.5 1.2 5.2 1.8 8 1.8s5.5-.6 8-1.8M12 9.8V21m-3-7l-2 7m8-7l2 7"
          />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Accessibility Panel"
          className="fixed bottom-24 right-6 z-[9999] w-[320px] max-w-[90vw] max-h-[75vh] overflow-y-auto bg-white text-gray-900 rounded-2xl shadow-2xl border border-gray-200 p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-gray-900">Accessibility</h2>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close accessibility panel"
              className="text-gray-400 hover:text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Color Blind Mode */}
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Color Blind Mode</p>
            <div className="space-y-1.5">
              {(['none', 'protanopia', 'deuteranopia', 'tritanopia'] as ColorBlindMode[]).map((mode) => (
                <label key={mode} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="a11y-colorblind"
                    checked={settings.colorBlindMode === mode}
                    onChange={() => update({ colorBlindMode: mode })}
                    className="accent-primary"
                  />
                  <span className="capitalize">{mode === 'none' ? 'Off' : mode}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-3 border-t border-gray-100 pt-4">
            <ToggleRow
              label="High Contrast Mode"
              checked={settings.highContrast}
              onChange={(v) => update({ highContrast: v })}
            />
            <ToggleRow
              label="Increase Contrast"
              checked={settings.increaseContrast}
              onChange={(v) => update({ increaseContrast: v })}
            />
            <ToggleRow
              label="Large Text"
              checked={settings.largeText}
              onChange={(v) => update({ largeText: v })}
            />
            <ToggleRow
              label="Reduce Motion"
              checked={settings.reduceMotion}
              onChange={(v) => update({ reduceMotion: v })}
            />
            <ToggleRow
              label="Focus Highlight"
              checked={settings.focusHighlight}
              onChange={(v) => update({ focusHighlight: v })}
            />
          </div>

          <button
            onClick={resetAll}
            className="mt-5 w-full text-xs font-bold text-gray-500 hover:text-primary transition-colors border-t border-gray-100 pt-3"
          >
            Reset to Default
          </button>
        </div>
      )}
    </>
  );
};

interface ToggleRowProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

const ToggleRow: React.FC<ToggleRowProps> = ({ label, checked, onChange }) => (
  <label className="flex items-center justify-between cursor-pointer">
    <span className="text-sm text-gray-800 font-medium">{label}</span>
    <span className="relative inline-block w-10 h-5">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer"
      />
      <span className="absolute inset-0 rounded-full bg-gray-300 peer-checked:bg-primary transition-colors duration-300"></span>
      <span className="absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300 peer-checked:translate-x-5"></span>
    </span>
  </label>
);

// Scoped CSS — every rule is gated behind an html[data-a11y-*] attribute or
// html.a11y-* class, so nothing here applies unless a toggle is switched on.
const A11Y_STYLES = `
.a11y-svg-filters {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}

html[data-a11y-colorblind="protanopia"] { filter: url(#a11y-protanopia); }
html[data-a11y-colorblind="deuteranopia"] { filter: url(#a11y-deuteranopia); }
html[data-a11y-colorblind="tritanopia"] { filter: url(#a11y-tritanopia); }

html.a11y-high-contrast body {
  filter: contrast(1.35) saturate(1.1);
}

html.a11y-increase-contrast body {
  filter: contrast(1.15);
}

html.a11y-large-text {
  font-size: 118% !important;
}

html.a11y-reduce-motion *,
html.a11y-reduce-motion *::before,
html.a11y-reduce-motion *::after {
  animation-duration: 0.001ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.001ms !important;
  scroll-behavior: auto !important;
}

html.a11y-focus-highlight *:focus,
html.a11y-focus-highlight *:focus-visible {
  outline: 3px solid #facc15 !important;
  outline-offset: 3px !important;
  border-radius: 2px;
}
`;
