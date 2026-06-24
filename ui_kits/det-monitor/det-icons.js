/* Juris8 DET Monitor — inline SVG icons (Lucide-style geometry).
   Replaces lucide.createIcons(), which mutated React-owned DOM and corrupted
   React's fiber↔DOM mapping (stale/misplaced inline styles, stuck nav highlight).
   This component renders a stable <svg> React owns, so re-renders patch cleanly.
   Plain JS — load AFTER React, BEFORE the text/babel component scripts. */
(function () {
  // Each icon = array of [tagName, attrs] children of a 24×24 stroked svg.
  var P = function (d) { return ['path', { d: d }]; };
  var C = function (cx, cy, r) { return ['circle', { cx: cx, cy: cy, r: r }]; };
  var R = function (x, y, w, h, rx) { return ['rect', { x: x, y: y, width: w, height: h, rx: rx }]; };

  var ICONS = {
    'layout-dashboard': [R(3, 3, 7, 9, 1), R(14, 3, 7, 5, 1), R(14, 12, 7, 9, 1), R(3, 16, 7, 5, 1)],
    'users-round': [P('M18 21a8 8 0 0 0-16 0'), C(10, 8, 5), P('M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3')],
    'radar': [C(12, 12, 9), C(12, 12, 3), P('m12 12 5.5-5.5'), P('M12 3a9 9 0 0 1 6.4 2.65')],
    'building-2': [P('M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z'), P('M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2'), P('M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2'), P('M10 6h4'), P('M10 10h4'), P('M10 14h4'), P('M10 18h4')],
    'file-badge-2': [P('M14 2v4a2 2 0 0 0 2 2h4'), P('M16 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8l6 6v3'), C(9.5, 16, 2.5), P('M7.6 18.2 6.5 22l3-1.7L12.4 22l-1.1-3.8')],
    'wallet-cards': [R(3, 5, 18, 14, 2), P('M3 10h18'), P('M16 14h.01')],
    'settings': [P('M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'), C(12, 12, 3)],
    'chevron-right': [P('m9 18 6-6-6-6')],
    'search': [C(11, 11, 8), P('m21 21-4.3-4.3')],
    'bell': [P('M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9'), P('M10.3 21a1.94 1.94 0 0 0 3.4 0')],
    'bell-ring': [P('M10.268 21a2 2 0 0 0 3.464 0'), P('M22 8c0-2.3-.8-4.3-2-6'), P('M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326'), P('M4 2C2.8 3.7 2 5.7 2 8')],
    'triangle-alert': [P('m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z'), P('M12 9v4'), P('M12 17h.01')],
    'check': [P('M20 6 9 17l-5-5')],
    'upload': [P('M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'), P('m17 8-5-5-5 5'), P('M12 3v12')],
    'file-lock-2': [P('M14 2v4a2 2 0 0 0 2 2h4'), P('M10 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8l6 6v4'), R(8, 15, 8, 5, 1), P('M11 15v-1.5a1.5 1.5 0 0 1 3 0V15')],
    'shield-check': [P('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z'), P('m9 12 2 2 4-4')],
    'lock': [R(3, 11, 18, 11, 2), P('M7 11V7a5 5 0 0 1 10 0v4')],
    'arrow-right': [P('M5 12h14'), P('m12 5 7 7-7 7')],
    'repeat': [P('m17 2 4 4-4 4'), P('M3 11v-1a4 4 0 0 1 4-4h14'), P('m7 22-4-4 4-4'), P('M21 13v1a4 4 0 0 1-4 4H3')],
    'construction': [R(2, 6, 20, 8, 1), P('M17 14v7'), P('M7 14v7'), P('M17 3v3'), P('M7 3v3'), P('M10 14 2.3 6.3'), P('m14 6 7.7 7.7'), P('m8 6 8 8')],
  };

  function DetIcon(props) {
    var size = props.size == null ? 16 : props.size;
    var color = props.color || 'currentColor';
    var sw = props.sw == null ? 1.9 : props.sw;
    var spec = ICONS[props.name] || [];
    var children = spec.map(function (node, i) {
      return React.createElement(node[0], Object.assign({ key: i }, node[1]));
    });
    var style = Object.assign({ display: 'block', flexShrink: 0 }, props.style || {});
    return React.createElement('svg', {
      width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color,
      strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round', style: style,
    }, children);
  }

  window.DetIcon = DetIcon;
})();
