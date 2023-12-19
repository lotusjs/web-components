import { css } from "lit";

export default css`
  :root,
  :host,
  .l-theme-light {
    color-scheme: light;

    --l-color-gray-50: hsl(0 0% 97.5%);
    --l-color-gray-100: hsl(240 4.8% 95.9%);
    --l-color-gray-200: hsl(240 5.9% 90%);
    --l-color-gray-300: hsl(240 4.9% 83.9%);
    --l-color-gray-400: hsl(240 5% 64.9%);
    --l-color-gray-500: hsl(240 3.8% 46.1%);
    --l-color-gray-600: hsl(240 5.2% 33.9%);
    --l-color-gray-700: hsl(240 5.3% 26.1%);
    --l-color-gray-800: hsl(240 3.7% 15.9%);
    --l-color-gray-900: hsl(240 5.9% 10%);
    --l-color-gray-950: hsl(240 7.3% 8%);

    --l-color-red-50: hsl(0 85.7% 97.3%);
    --l-color-red-100: hsl(0 93.3% 94.1%);
    --l-color-red-200: hsl(0 96.3% 89.4%);
    --l-color-red-300: hsl(0 93.5% 81.8%);
    --l-color-red-400: hsl(0 90.6% 70.8%);
    --l-color-red-500: hsl(0 84.2% 60.2%);
    --l-color-red-600: hsl(0 72.2% 50.6%);
    --l-color-red-700: hsl(0 73.7% 41.8%);
    --l-color-red-800: hsl(0 70% 35.3%);
    --l-color-red-900: hsl(0 62.8% 30.6%);
    --l-color-red-950: hsl(0 60% 19.6%);

    --l-color-orange-50: hsl(33.3 100% 96.5%);
    --l-color-orange-100: hsl(34.3 100% 91.8%);
    --l-color-orange-200: hsl(32.1 97.7% 83.1%);
    --l-color-orange-300: hsl(30.7 97.2% 72.4%);
    --l-color-orange-400: hsl(27 96% 61%);
    --l-color-orange-500: hsl(24.6 95% 53.1%);
    --l-color-orange-600: hsl(20.5 90.2% 48.2%);
    --l-color-orange-700: hsl(17.5 88.3% 40.4%);
    --l-color-orange-800: hsl(15 79.1% 33.7%);
    --l-color-orange-900: hsl(15.3 74.6% 27.8%);
    --l-color-orange-950: hsl(15.2 69.1% 19%);

    --l-color-amber-50: hsl(48 100% 96.1%);
    --l-color-amber-100: hsl(48 96.5% 88.8%);
    --l-color-amber-200: hsl(48 96.6% 76.7%);
    --l-color-amber-300: hsl(45.9 96.7% 64.5%);
    --l-color-amber-400: hsl(43.3 96.4% 56.3%);
    --l-color-amber-500: hsl(37.7 92.1% 50.2%);
    --l-color-amber-600: hsl(32.1 94.6% 43.7%);
    --l-color-amber-700: hsl(26 90.5% 37.1%);
    --l-color-amber-800: hsl(22.7 82.5% 31.4%);
    --l-color-amber-900: hsl(21.7 77.8% 26.5%);
    --l-color-amber-950: hsl(22.9 74.1% 16.7%);

    --l-color-yellow-50: hsl(54.5 91.7% 95.3%);
    --l-color-yellow-100: hsl(54.9 96.7% 88%);
    --l-color-yellow-200: hsl(52.8 98.3% 76.9%);
    --l-color-yellow-300: hsl(50.4 97.8% 63.5%);
    --l-color-yellow-400: hsl(47.9 95.8% 53.1%);
    --l-color-yellow-500: hsl(45.4 93.4% 47.5%);
    --l-color-yellow-600: hsl(40.6 96.1% 40.4%);
    --l-color-yellow-700: hsl(35.5 91.7% 32.9%);
    --l-color-yellow-800: hsl(31.8 81% 28.8%);
    --l-color-yellow-900: hsl(28.4 72.5% 25.7%);
    --l-color-yellow-950: hsl(33.1 69% 13.9%);

    --l-color-lime-50: hsl(78.3 92% 95.1%);
    --l-color-lime-100: hsl(79.6 89.1% 89.2%);
    --l-color-lime-200: hsl(80.9 88.5% 79.6%);
    --l-color-lime-300: hsl(82 84.5% 67.1%);
    --l-color-lime-400: hsl(82.7 78% 55.5%);
    --l-color-lime-500: hsl(83.7 80.5% 44.3%);
    --l-color-lime-600: hsl(84.8 85.2% 34.5%);
    --l-color-lime-700: hsl(85.9 78.4% 27.3%);
    --l-color-lime-800: hsl(86.3 69% 22.7%);
    --l-color-lime-900: hsl(87.6 61.2% 20.2%);
    --l-color-lime-950: hsl(86.5 60.6% 13.9%);

    --l-color-green-50: hsl(138.5 76.5% 96.7%);
    --l-color-green-100: hsl(140.6 84.2% 92.5%);
    --l-color-green-200: hsl(141 78.9% 85.1%);
    --l-color-green-300: hsl(141.7 76.6% 73.1%);
    --l-color-green-400: hsl(141.9 69.2% 58%);
    --l-color-green-500: hsl(142.1 70.6% 45.3%);
    --l-color-green-600: hsl(142.1 76.2% 36.3%);
    --l-color-green-700: hsl(142.4 71.8% 29.2%);
    --l-color-green-800: hsl(142.8 64.2% 24.1%);
    --l-color-green-900: hsl(143.8 61.2% 20.2%);
    --l-color-green-950: hsl(144.3 60.7% 12%);

    --l-color-emerald-50: hsl(151.8 81% 95.9%);
    --l-color-emerald-100: hsl(149.3 80.4% 90%);
    --l-color-emerald-200: hsl(152.4 76% 80.4%);
    --l-color-emerald-300: hsl(156.2 71.6% 66.9%);
    --l-color-emerald-400: hsl(158.1 64.4% 51.6%);
    --l-color-emerald-500: hsl(160.1 84.1% 39.4%);
    --l-color-emerald-600: hsl(161.4 93.5% 30.4%);
    --l-color-emerald-700: hsl(162.9 93.5% 24.3%);
    --l-color-emerald-800: hsl(163.1 88.1% 19.8%);
    --l-color-emerald-900: hsl(164.2 85.7% 16.5%);
    --l-color-emerald-950: hsl(164.3 87.5% 9.4%);

    --l-color-teal-50: hsl(166.2 76.5% 96.7%);
    --l-color-teal-100: hsl(167.2 85.5% 89.2%);
    --l-color-teal-200: hsl(168.4 83.8% 78.2%);
    --l-color-teal-300: hsl(170.6 76.9% 64.3%);
    --l-color-teal-400: hsl(172.5 66% 50.4%);
    --l-color-teal-500: hsl(173.4 80.4% 40%);
    --l-color-teal-600: hsl(174.7 83.9% 31.6%);
    --l-color-teal-700: hsl(175.3 77.4% 26.1%);
    --l-color-teal-800: hsl(176.1 69.4% 21.8%);
    --l-color-teal-900: hsl(175.9 60.8% 19%);
    --l-color-teal-950: hsl(176.5 58.6% 11.4%);

    --l-color-cyan-50: hsl(183.2 100% 96.3%);
    --l-color-cyan-100: hsl(185.1 95.9% 90.4%);
    --l-color-cyan-200: hsl(186.2 93.5% 81.8%);
    --l-color-cyan-300: hsl(187 92.4% 69%);
    --l-color-cyan-400: hsl(187.9 85.7% 53.3%);
    --l-color-cyan-500: hsl(188.7 94.5% 42.7%);
    --l-color-cyan-600: hsl(191.6 91.4% 36.5%);
    --l-color-cyan-700: hsl(192.9 82.3% 31%);
    --l-color-cyan-800: hsl(194.4 69.6% 27.1%);
    --l-color-cyan-900: hsl(196.4 63.6% 23.7%);
    --l-color-cyan-950: hsl(196.8 61% 16.1%);

    --l-color-sky-50: hsl(204 100% 97.1%);
    --l-color-sky-100: hsl(204 93.8% 93.7%);
    --l-color-sky-200: hsl(200.6 94.4% 86.1%);
    --l-color-sky-300: hsl(199.4 95.5% 73.9%);
    --l-color-sky-400: hsl(198.4 93.2% 59.6%);
    --l-color-sky-500: hsl(198.6 88.7% 48.4%);
    --l-color-sky-600: hsl(200.4 98% 39.4%);
    --l-color-sky-700: hsl(201.3 96.3% 32.2%);
    --l-color-sky-800: hsl(201 90% 27.5%);
    --l-color-sky-900: hsl(202 80.3% 23.9%);
    --l-color-sky-950: hsl(202.3 73.8% 16.5%);

    --l-color-blue-50: hsl(213.8 100% 96.9%);
    --l-color-blue-100: hsl(214.3 94.6% 92.7%);
    --l-color-blue-200: hsl(213.3 96.9% 87.3%);
    --l-color-blue-300: hsl(211.7 96.4% 78.4%);
    --l-color-blue-400: hsl(213.1 93.9% 67.8%);
    --l-color-blue-500: hsl(217.2 91.2% 59.8%);
    --l-color-blue-600: hsl(221.2 83.2% 53.3%);
    --l-color-blue-700: hsl(224.3 76.3% 48%);
    --l-color-blue-800: hsl(225.9 70.7% 40.2%);
    --l-color-blue-900: hsl(224.4 64.3% 32.9%);
    --l-color-blue-950: hsl(226.2 55.3% 18.4%);

    --l-color-indigo-50: hsl(225.9 100% 96.7%);
    --l-color-indigo-100: hsl(226.5 100% 93.9%);
    --l-color-indigo-200: hsl(228 96.5% 88.8%);
    --l-color-indigo-300: hsl(229.7 93.5% 81.8%);
    --l-color-indigo-400: hsl(234.5 89.5% 73.9%);
    --l-color-indigo-500: hsl(238.7 83.5% 66.7%);
    --l-color-indigo-600: hsl(243.4 75.4% 58.6%);
    --l-color-indigo-700: hsl(244.5 57.9% 50.6%);
    --l-color-indigo-800: hsl(243.7 54.5% 41.4%);
    --l-color-indigo-900: hsl(242.2 47.4% 34.3%);
    --l-color-indigo-950: hsl(243.5 43.6% 22.9%);

    --l-color-violet-50: hsl(250 100% 97.6%);
    --l-color-violet-100: hsl(251.4 91.3% 95.5%);
    --l-color-violet-200: hsl(250.5 95.2% 91.8%);
    --l-color-violet-300: hsl(252.5 94.7% 85.1%);
    --l-color-violet-400: hsl(255.1 91.7% 76.3%);
    --l-color-violet-500: hsl(258.3 89.5% 66.3%);
    --l-color-violet-600: hsl(262.1 83.3% 57.8%);
    --l-color-violet-700: hsl(263.4 70% 50.4%);
    --l-color-violet-800: hsl(263.4 69.3% 42.2%);
    --l-color-violet-900: hsl(263.5 67.4% 34.9%);
    --l-color-violet-950: hsl(265.1 61.5% 21.4%);

    --l-color-purple-50: hsl(270 100% 98%);
    --l-color-purple-100: hsl(268.7 100% 95.5%);
    --l-color-purple-200: hsl(268.6 100% 91.8%);
    --l-color-purple-300: hsl(269.2 97.4% 85.1%);
    --l-color-purple-400: hsl(270 95.2% 75.3%);
    --l-color-purple-500: hsl(270.7 91% 65.1%);
    --l-color-purple-600: hsl(271.5 81.3% 55.9%);
    --l-color-purple-700: hsl(272.1 71.7% 47.1%);
    --l-color-purple-800: hsl(272.9 67.2% 39.4%);
    --l-color-purple-900: hsl(273.6 65.6% 32%);
    --l-color-purple-950: hsl(276 59.5% 16.5%);

    --l-color-fuchsia-50: hsl(289.1 100% 97.8%);
    --l-color-fuchsia-100: hsl(287 100% 95.5%);
    --l-color-fuchsia-200: hsl(288.3 95.8% 90.6%);
    --l-color-fuchsia-300: hsl(291.1 93.1% 82.9%);
    --l-color-fuchsia-400: hsl(292 91.4% 72.5%);
    --l-color-fuchsia-500: hsl(292.2 84.1% 60.6%);
    --l-color-fuchsia-600: hsl(293.4 69.5% 48.8%);
    --l-color-fuchsia-700: hsl(294.7 72.4% 39.8%);
    --l-color-fuchsia-800: hsl(295.4 70.2% 32.9%);
    --l-color-fuchsia-900: hsl(296.7 63.6% 28%);
    --l-color-fuchsia-950: hsl(297.1 56.8% 14.5%);

    --l-color-pink-50: hsl(327.3 73.3% 97.1%);
    --l-color-pink-100: hsl(325.7 77.8% 94.7%);
    --l-color-pink-200: hsl(325.9 84.6% 89.8%);
    --l-color-pink-300: hsl(327.4 87.1% 81.8%);
    --l-color-pink-400: hsl(328.6 85.5% 70.2%);
    --l-color-pink-500: hsl(330.4 81.2% 60.4%);
    --l-color-pink-600: hsl(333.3 71.4% 50.6%);
    --l-color-pink-700: hsl(335.1 77.6% 42%);
    --l-color-pink-800: hsl(335.8 74.4% 35.3%);
    --l-color-pink-900: hsl(335.9 69% 30.4%);
    --l-color-pink-950: hsl(336.2 65.4% 15.9%);

    --l-color-rose-50: hsl(355.7 100% 97.3%);
    --l-color-rose-100: hsl(355.6 100% 94.7%);
    --l-color-rose-200: hsl(352.7 96.1% 90%);
    --l-color-rose-300: hsl(352.6 95.7% 81.8%);
    --l-color-rose-400: hsl(351.3 94.5% 71.4%);
    --l-color-rose-500: hsl(349.7 89.2% 60.2%);
    --l-color-rose-600: hsl(346.8 77.2% 49.8%);
    --l-color-rose-700: hsl(345.3 82.7% 40.8%);
    --l-color-rose-800: hsl(343.4 79.7% 34.7%);
    --l-color-rose-900: hsl(341.5 75.5% 30.4%);
    --l-color-rose-950: hsl(341.3 70.1% 17.1%);

    --l-color-primary-50: var(--l-color-sky-50);
    --l-color-primary-100: var(--l-color-sky-100);
    --l-color-primary-200: var(--l-color-sky-200);
    --l-color-primary-300: var(--l-color-sky-300);
    --l-color-primary-400: var(--l-color-sky-400);
    --l-color-primary-500: var(--l-color-sky-500);
    --l-color-primary-600: var(--l-color-sky-600);
    --l-color-primary-700: var(--l-color-sky-700);
    --l-color-primary-800: var(--l-color-sky-800);
    --l-color-primary-900: var(--l-color-sky-900);
    --l-color-primary-950: var(--l-color-sky-950);

    --l-color-success-50: var(--l-color-green-50);
    --l-color-success-100: var(--l-color-green-100);
    --l-color-success-200: var(--l-color-green-200);
    --l-color-success-300: var(--l-color-green-300);
    --l-color-success-400: var(--l-color-green-400);
    --l-color-success-500: var(--l-color-green-500);
    --l-color-success-600: var(--l-color-green-600);
    --l-color-success-700: var(--l-color-green-700);
    --l-color-success-800: var(--l-color-green-800);
    --l-color-success-900: var(--l-color-green-900);
    --l-color-success-950: var(--l-color-green-950);

    --l-color-warning-50: var(--l-color-amber-50);
    --l-color-warning-100: var(--l-color-amber-100);
    --l-color-warning-200: var(--l-color-amber-200);
    --l-color-warning-300: var(--l-color-amber-300);
    --l-color-warning-400: var(--l-color-amber-400);
    --l-color-warning-500: var(--l-color-amber-500);
    --l-color-warning-600: var(--l-color-amber-600);
    --l-color-warning-700: var(--l-color-amber-700);
    --l-color-warning-800: var(--l-color-amber-800);
    --l-color-warning-900: var(--l-color-amber-900);
    --l-color-warning-950: var(--l-color-amber-950);

    --l-color-danger-50: var(--l-color-red-50);
    --l-color-danger-100: var(--l-color-red-100);
    --l-color-danger-200: var(--l-color-red-200);
    --l-color-danger-300: var(--l-color-red-300);
    --l-color-danger-400: var(--l-color-red-400);
    --l-color-danger-500: var(--l-color-red-500);
    --l-color-danger-600: var(--l-color-red-600);
    --l-color-danger-700: var(--l-color-red-700);
    --l-color-danger-800: var(--l-color-red-800);
    --l-color-danger-900: var(--l-color-red-900);
    --l-color-danger-950: var(--l-color-red-950);

    --l-color-neutral-50: var(--l-color-gray-50);
    --l-color-neutral-100: var(--l-color-gray-100);
    --l-color-neutral-200: var(--l-color-gray-200);
    --l-color-neutral-300: var(--l-color-gray-300);
    --l-color-neutral-400: var(--l-color-gray-400);
    --l-color-neutral-500: var(--l-color-gray-500);
    --l-color-neutral-600: var(--l-color-gray-600);
    --l-color-neutral-700: var(--l-color-gray-700);
    --l-color-neutral-800: var(--l-color-gray-800);
    --l-color-neutral-900: var(--l-color-gray-900);
    --l-color-neutral-950: var(--l-color-gray-950);

    --l-color-neutral-0: hsl(0, 0%, 100%);
    --l-color-neutral-1000: hsl(0, 0%, 0%);

    --l-border-radius-small: 0.1875rem;
    --l-border-radius-medium: 0.25rem;
    --l-border-radius-large: 0.5rem;
    --l-border-radius-x-large: 1rem;

    --l-border-radius-circle: 50%;
    --l-border-radius-pill: 9999px;

    --l-shadow-x-small: 0 1px 2px hsl(240 3.8% 46.1% / 6%);
    --l-shadow-small: 0 1px 2px hsl(240 3.8% 46.1% / 12%);
    --l-shadow-medium: 0 2px 4px hsl(240 3.8% 46.1% / 12%);
    --l-shadow-large: 0 2px 8px hsl(240 3.8% 46.1% / 12%);
    --l-shadow-x-large: 0 4px 16px hsl(240 3.8% 46.1% / 12%);

    --l-spacing-3x-small: 0.125rem;
    --l-spacing-2x-small: 0.25rem;
    --l-spacing-x-small: 0.5rem;
    --l-spacing-small: 0.75rem;
    --l-spacing-medium: 1rem;
    --l-spacing-large: 1.25rem;
    --l-spacing-x-large: 1.75rem;
    --l-spacing-2x-large: 2.25rem;
    --l-spacing-3x-large: 3rem;
    --l-spacing-4x-large: 4.5rem;

    --l-transition-x-slow: 1000ms;
    --l-transition-slow: 500ms;
    --l-transition-medium: 250ms;
    --l-transition-fast: 150ms;
    --l-transition-x-fast: 50ms;

    --l-font-mono: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
    --l-font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    --l-font-serif: Georgia, "Times New Roman", serif;

    --l-font-size-2x-small: 0.625rem;
    --l-font-size-x-small: 0.75rem;
    --l-font-size-small: 0.875rem;
    --l-font-size-medium: 1rem;
    --l-font-size-large: 1.25rem;
    --l-font-size-x-large: 1.5rem;
    --l-font-size-2x-large: 2.25rem;
    --l-font-size-3x-large: 3rem;
    --l-font-size-4x-large: 4.5rem;

    --l-font-weight-light: 300;
    --l-font-weight-normal: 400;
    --l-font-weight-semibold: 500;
    --l-font-weight-bold: 700;

    --l-letter-spacing-denser: -0.03em;
    --l-letter-spacing-dense: -0.015em;
    --l-letter-spacing-normal: normal;
    --l-letter-spacing-loose: 0.075em;
    --l-letter-spacing-looser: 0.15em;

    --l-line-height-denser: 1;
    --l-line-height-dense: 1.4;
    --l-line-height-normal: 1.8;
    --l-line-height-loose: 2.2;
    --l-line-height-looser: 2.6;

    --l-focus-ring-color: var(--l-color-primary-600);
    --l-focus-ring-style: solid;
    --l-focus-ring-width: 3px;
    --l-focus-ring: var(--l-focus-ring-style) var(--l-focus-ring-width)
      var(--l-focus-ring-color);
    --l-focus-ring-offset: 1px;

    --l-button-font-size-small: var(--l-font-size-x-small);
    --l-button-font-size-medium: var(--l-font-size-small);
    --l-button-font-size-large: var(--l-font-size-medium);

    --l-input-height-small: 1.875rem;
    --l-input-height-medium: 2.5rem;
    --l-input-height-large: 3.125rem;

    --l-input-background-color: var(--l-color-neutral-0);
    --l-input-background-color-hover: var(--l-input-background-color);
    --l-input-background-color-focus: var(--l-input-background-color);
    --l-input-background-color-disabled: var(--l-color-neutral-100);
    --l-input-border-color: var(--l-color-neutral-300);
    --l-input-border-color-hover: var(--l-color-neutral-400);
    --l-input-border-color-focus: var(--l-color-primary-500);
    --l-input-border-color-disabled: var(--l-color-neutral-300);
    --l-input-border-width: 1px;
    --l-input-required-content: "*";
    --l-input-required-content-offset: -2px;
    --l-input-required-content-color: var(--l-input-label-color);

    --l-input-border-radius-small: var(--l-border-radius-medium);
    --l-input-border-radius-medium: var(--l-border-radius-medium);
    --l-input-border-radius-large: var(--l-border-radius-medium);

    --l-input-font-family: var(--l-font-sans);
    --l-input-font-weight: var(--l-font-weight-normal);
    --l-input-font-size-small: var(--l-font-size-small);
    --l-input-font-size-medium: var(--l-font-size-medium);
    --l-input-font-size-large: var(--l-font-size-large);
    --l-input-letter-spacing: var(--l-letter-spacing-normal);

    --l-input-color: var(--l-color-neutral-700);
    --l-input-color-hover: var(--l-color-neutral-700);
    --l-input-color-focus: var(--l-color-neutral-700);
    --l-input-color-disabled: var(--l-color-neutral-900);
    --l-input-icon-color: var(--l-color-neutral-500);
    --l-input-icon-color-hover: var(--l-color-neutral-600);
    --l-input-icon-color-focus: var(--l-color-neutral-600);
    --l-input-placeholder-color: var(--l-color-neutral-500);
    --l-input-placeholder-color-disabled: var(--l-color-neutral-600);
    --l-input-spacing-small: var(--l-spacing-small);
    --l-input-spacing-medium: var(--l-spacing-medium);
    --l-input-spacing-large: var(--l-spacing-large);

    --l-input-focus-ring-color: hsl(198.6 88.7% 48.4% / 40%);
    --l-input-focus-ring-offset: 0;

    --l-input-filled-background-color: var(--l-color-neutral-100);
    --l-input-filled-background-color-hover: var(--l-color-neutral-100);
    --l-input-filled-background-color-focus: var(--l-color-neutral-100);
    --l-input-filled-background-color-disabled: var(--l-color-neutral-100);
    --l-input-filled-color: var(--l-color-neutral-800);
    --l-input-filled-color-hover: var(--l-color-neutral-800);
    --l-input-filled-color-focus: var(--l-color-neutral-700);
    --l-input-filled-color-disabled: var(--l-color-neutral-800);

    --l-input-label-font-size-small: var(--l-font-size-small);
    --l-input-label-font-size-medium: var(--l-font-size-medium);
    --l-input-label-font-size-large: var(--l-font-size-large);
    --l-input-label-color: inherit;

    --l-input-help-text-font-size-small: var(--l-font-size-x-small);
    --l-input-help-text-font-size-medium: var(--l-font-size-small);
    --l-input-help-text-font-size-large: var(--l-font-size-medium);
    --l-input-help-text-color: var(--l-color-neutral-500);

    --l-toggle-size-small: 0.875rem;
    --l-toggle-size-medium: 1.125rem;
    --l-toggle-size-large: 1.375rem;

    --l-overlay-background-color: hsl(240 3.8% 46.1% / 33%);

    --l-panel-background-color: var(--l-color-neutral-0);
    --l-panel-border-color: var(--l-color-neutral-200);
    --l-panel-border-width: 1px;

    --l-tooltip-border-radius: var(--l-border-radius-medium);
    --l-tooltip-background-color: var(--l-color-neutral-800);
    --l-tooltip-color: var(--l-color-neutral-0);
    --l-tooltip-font-family: var(--l-font-sans);
    --l-tooltip-font-weight: var(--l-font-weight-normal);
    --l-tooltip-font-size: var(--l-font-size-small);
    --l-tooltip-line-height: var(--l-line-height-dense);
    --l-tooltip-padding: var(--l-spacing-2x-small) var(--l-spacing-x-small);
    --l-tooltip-arrow-size: 6px;

    --l-z-index-drawer: 700;
    --l-z-index-dialog: 800;
    --l-z-index-dropdown: 900;
    --l-z-index-toast: 950;
    --l-z-index-tooltip: 1000;
  }
`;
