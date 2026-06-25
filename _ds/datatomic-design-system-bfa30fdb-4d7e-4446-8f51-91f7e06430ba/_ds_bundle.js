/* @ds-bundle: {"format":3,"namespace":"DatatomicDesignSystem_bfa30f","components":[{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"KpiCard","sourcePath":"components/data/KpiCard.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/data/Avatar.jsx":"945c92906591","components/data/Badge.jsx":"3cbe321a60f5","components/data/Card.jsx":"b9ffcc9c3f46","components/data/KpiCard.jsx":"d97d972efe5f","components/data/Tag.jsx":"b0a1a71a071d","components/feedback/Dialog.jsx":"d524fe6c920a","components/feedback/EmptyState.jsx":"fbd0f6a561e4","components/feedback/Toast.jsx":"155fdf9b4ed6","components/forms/Button.jsx":"dddbe427272e","components/forms/Checkbox.jsx":"54af4c914696","components/forms/IconButton.jsx":"158b2df3d2fd","components/forms/Input.jsx":"1596aab4153f","components/forms/Select.jsx":"8fe275db9165","components/forms/Switch.jsx":"2a68a491ddd4","components/navigation/NavItem.jsx":"08f2dc8871de","components/navigation/Tabs.jsx":"b9e4c4e327ad","ui_kits/app/Sidebar.jsx":"39cac6e8d719","ui_kits/app/Topbar.jsx":"a4f10714b284","ui_kits/app/screens.jsx":"89e520a9acef"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DatatomicDesignSystem_bfa30f = window.DatatomicDesignSystem_bfa30f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PALETTE = ['#FF4576', '#2D4BF0', '#3be2c0', '#3765fd', '#8B5CF6', '#EC4899', '#14B8A6'];
function initialsOf(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
function colorFor(name = '') {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = h * 31 + name.charCodeAt(i) >>> 0;
  return PALETTE[h % PALETTE.length];
}

/**
 * Round avatar with initials on a varied accent colour (deterministic from
 * the name), or an image. Used in tables and member lists.
 */
function Avatar({
  name = '',
  src,
  size = 36,
  color,
  style = {},
  ...rest
}) {
  const bg = color || colorFor(name);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? 'var(--neutral-tint)' : bg,
      color: '#fff',
      fontWeight: 'var(--fw-bold)',
      fontSize: Math.round(size * 0.38),
      flexShrink: 0,
      overflow: 'hidden',
      userSelect: 'none',
      ...style
    },
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initialsOf(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Status pill / label badge. Rounded (999px). Tones map to brand semantics:
 * active(green), beta(blue), new(green), tuto(orange), done(neutral), info.
 * Set `dot` for a leading status dot, or pass `icon`.
 */
function Badge({
  tone = 'neutral',
  variant = 'soft',
  dot = false,
  icon = null,
  size = 'md',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    primary: {
      fg: 'var(--color-primary)',
      bg: 'var(--blue-tint)',
      solid: 'var(--color-primary)'
    },
    success: {
      fg: 'var(--green-500)',
      bg: 'var(--green-tint)',
      solid: 'var(--green-500)'
    },
    warning: {
      fg: 'var(--orange-500)',
      bg: 'var(--orange-tint)',
      solid: 'var(--orange-500)'
    },
    info: {
      fg: 'var(--blue-300)',
      bg: 'var(--status-info-bg)',
      solid: 'var(--blue-300)'
    },
    danger: {
      fg: 'var(--status-error)',
      bg: 'var(--status-error-bg)',
      solid: 'var(--status-error)'
    },
    neutral: {
      fg: 'var(--text-secondary)',
      bg: 'var(--neutral-tint)',
      solid: 'var(--text-secondary)'
    },
    /* Fixed product badge fills (independent of the accent palette) */
    new: {
      fg: 'var(--badge-new)',
      bg: 'var(--green-tint)',
      solid: 'var(--badge-new)'
    },
    tuto: {
      fg: 'var(--badge-tuto)',
      bg: 'var(--orange-tint)',
      solid: 'var(--badge-tuto)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const solid = variant === 'solid';
  const sizes = {
    sm: {
      fontSize: '11px',
      padding: '2px 8px',
      height: 18
    },
    md: {
      fontSize: '12px',
      padding: '4px 10px',
      height: 22
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1,
      fontFamily: 'var(--font-sans)',
      whiteSpace: 'nowrap',
      background: solid ? t.solid : t.bg,
      color: solid ? '#fff' : t.fg,
      ...sizes[size],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: solid ? '#fff' : t.solid,
      flexShrink: 0
    }
  }), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Content surface — white, 14px radius, subtle blue-tinted shadow.
 * Optional header (title + actions). Wraps tables, forms, KPI groups.
 */
function Card({
  title,
  actions,
  padding,
  interactive = false,
  children,
  style = {},
  bodyStyle = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
      boxShadow: hover ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'box-shadow var(--dur-base) var(--ease-standard)',
      overflow: 'hidden',
      ...style
    }
  }, rest), (title || actions) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)'
    }
  }, title), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }
  }, actions)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: padding !== undefined ? padding : 'var(--pad-card)',
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * KPI / metric card. Big tabular number + label, with a pastel icon tile.
 * `tone` colours the icon tile (blue / orange / green / info / neutral).
 */
function KpiCard({
  value,
  label,
  icon = null,
  tone = 'blue',
  delta,
  deltaTrend = 'up',
  style = {},
  ...rest
}) {
  const tones = {
    blue: {
      bg: 'var(--blue-tint)',
      fg: 'var(--color-primary)'
    },
    orange: {
      bg: 'var(--orange-tint)',
      fg: 'var(--orange-500)'
    },
    green: {
      bg: 'var(--green-tint)',
      fg: 'var(--green-500)'
    },
    info: {
      bg: 'var(--status-info-bg)',
      fg: 'var(--blue-300)'
    },
    neutral: {
      bg: 'var(--neutral-tint)',
      fg: 'var(--text-secondary)'
    }
  };
  const t = tones[tone] || tones.blue;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-card)',
      padding: '20px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '10px',
      background: t.bg,
      color: t.fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, icon), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      fontWeight: 'var(--fw-semibold)',
      color: deltaTrend === 'up' ? 'var(--green-500)' : 'var(--status-error)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '3px'
    }
  }, deltaTrend === 'up' ? '↑' : '↓', " ", delta)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-metric)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-primary)',
      lineHeight: 1.1,
      letterSpacing: 'var(--ls-tight)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      marginTop: '4px'
    }
  }, label)));
}
Object.assign(__ds_scope, { KpiCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Category / filter tag. Subtle bordered chip, optional dismiss (×) and a
 * colour dot for segment/category identity. Lighter weight than Badge.
 */
function Tag({
  children,
  color,
  onRemove,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px',
      fontSize: '12px',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-primary)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), color && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: color,
      flexShrink: 0
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Retirer",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      display: 'inline-flex',
      padding: 0,
      marginLeft: '2px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Modal dialog. Centered white card over a dimmed scrim. Header (title +
 * close), body (children), optional footer actions. Controlled via `open`.
 */
function Dialog({
  open = true,
  title,
  onClose,
  footer = null,
  width = 460,
  children,
  style = {},
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(26, 26, 46, 0.38)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card-lg)',
      boxShadow: 'var(--shadow-popover)',
      width,
      maxWidth: '100%',
      maxHeight: '90vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-primary)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fermer",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      display: 'flex',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px',
      overflow: 'auto',
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)',
      lineHeight: 'var(--lh-normal)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
      padding: '16px 24px',
      borderTop: '1px solid var(--border-default)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Empty state. Brand voice: a short, inviting line ("Rien à afficher"),
 * never an apology. Optional icon, description and a single create action.
 */
function EmptyState({
  icon = null,
  title = 'Rien à afficher',
  description,
  action = null,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '48px 24px',
      gap: '6px',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '14px',
      background: 'var(--blue-tint)',
      color: 'var(--color-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '10px'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      maxWidth: 320,
      lineHeight: 'var(--lh-normal)'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '14px'
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inline toast / notification. White card, subtle popover shadow, coloured
 * status accent on the left icon. Static presentational component — render
 * it where you manage your own queue/positioning.
 */
function Toast({
  tone = 'success',
  title,
  description,
  icon = null,
  onClose,
  style = {},
  ...rest
}) {
  const tones = {
    success: {
      fg: 'var(--green-500)',
      bg: 'var(--green-tint)'
    },
    info: {
      fg: 'var(--color-primary)',
      bg: 'var(--blue-tint)'
    },
    warning: {
      fg: 'var(--orange-500)',
      bg: 'var(--orange-tint)'
    },
    error: {
      fg: 'var(--status-error)',
      bg: 'var(--status-error-bg)'
    }
  };
  const t = tones[tone] || tones.success;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-popover)',
      padding: '14px 16px',
      minWidth: 300,
      maxWidth: 420,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '9px',
      flexShrink: 0,
      background: t.bg,
      color: t.fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)',
      marginTop: '2px',
      lineHeight: 'var(--lh-snug)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fermer",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-secondary)',
      display: 'flex',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Datatomic primary action button. One family, no shadow, 8px radius.
 * Use `icon` for a leading glyph; for "create" actions pass `create` to
 * prefix a "+" per the brand voice ("+ Nouveau modèle").
 */
function Button({
  variant = 'primary',
  size = 'md',
  create = false,
  icon = null,
  disabled = false,
  type = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '7px 14px',
      fontSize: '13px',
      height: 34
    },
    md: {
      padding: '10px 20px',
      fontSize: '14px',
      height: 40
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--text-on-primary)',
      border: '1.5px solid transparent'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1.5px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1.5px solid transparent'
    },
    danger: {
      background: 'var(--status-error)',
      color: 'var(--text-on-primary)',
      border: '1.5px solid transparent'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: 'var(--color-primary-hover)',
    secondary: 'var(--color-primary-soft)',
    ghost: 'var(--color-primary-soft)',
    danger: '#D93B3B'
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 1,
    borderRadius: 'var(--radius-btn)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
    ...sizes[size],
    ...variants[variant]
  };
  if (hover && !disabled) base.background = hoverBg[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...style
    }
  }, rest), create && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.1em',
      fontWeight: 'var(--fw-semibold)',
      marginRight: '-2px'
    }
  }, "+"), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Minimal checkbox (table row selection, filters). Custom-styled box with
 * a primary fill when checked. Pass `label` for an inline label.
 */
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '5px',
      border: on ? '1.5px solid var(--color-primary)' : '1.5px solid var(--border-strong)',
      background: on ? 'var(--color-primary)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
    }
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Square icon-only button (outline glyph inside). Used for "⋮" row menus,
 * search-clear, toolbar actions. Pass an icon node as children.
 */
function IconButton({
  size = 'md',
  variant = 'ghost',
  disabled = false,
  label,
  children,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 30,
    md: 36,
    lg: 40
  };
  const d = dims[size] || 36;
  const [hover, setHover] = React.useState(false);
  const variants = {
    ghost: {
      background: hover ? 'var(--color-primary-soft)' : 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    },
    outlined: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    },
    primary: {
      background: hover ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: 'var(--text-on-primary)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-btn)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional leading/trailing icon. 1px border, 8px radius,
 * 2px primary focus ring. Used for forms and search fields.
 */
function Input({
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  invalid = false,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? 'var(--status-error)' : focus ? 'var(--color-primary)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-input)',
      padding: '0 14px',
      boxShadow: focus && !invalid ? 'var(--focus-ring-soft)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      opacity: disabled ? 0.6 : 1,
      ...containerStyle
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-secondary)',
      flexShrink: 0
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)',
      padding: '10px 0',
      ...style
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-secondary)',
      flexShrink: 0
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Styled native select. Matches Input metrics (1px border, 8px radius,
 * focus ring). Use for filter dropdowns ("Statut", "Trier par…").
 */
function Select({
  value,
  defaultValue,
  onChange,
  disabled = false,
  options = [],
  placeholder,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      background: 'var(--surface-card)',
      border: `1px solid ${focus ? 'var(--color-primary)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-input)',
      boxShadow: focus ? 'var(--focus-ring-soft)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      padding: '10px 38px 10px 14px',
      width: '100%'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      pointerEvents: 'none',
      display: 'flex',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toggle switch for boolean settings (e.g. activer une automatisation).
 * Track turns primary when on. No superfluous animation beyond the slide.
 */
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--color-primary)' : 'var(--border-strong)',
      padding: 2,
      display: 'inline-flex',
      alignItems: 'center',
      transition: 'background var(--dur-base) var(--ease-standard)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 2px rgba(26,26,46,0.25)',
      transform: on ? 'translateX(16px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sidebar navigation item. Inactive: ink text, outline icon, transparent.
 * Active: soft-blue fill, primary text, 3px left border. Optional inline
 * badge ("BETA"/"NEW") and trailing count.
 */
function NavItem({
  icon = null,
  active = false,
  badge = null,
  count,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    role: "button",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 16px 10px 13px',
      borderLeft: active ? '3px solid var(--color-primary)' : '3px solid transparent',
      background: active ? 'var(--color-primary-soft)' : hover ? 'var(--lavender-050)' : 'transparent',
      color: active ? 'var(--color-primary)' : 'var(--text-primary)',
      fontSize: 'var(--text-body)',
      fontWeight: active ? 'var(--fw-semibold)' : 'var(--fw-medium)',
      borderRadius: '0 8px 8px 0',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexShrink: 0,
      color: active ? 'var(--color-primary)' : 'var(--text-secondary)'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, children), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.04em',
      background: badge === 'NEW' ? 'var(--green-500)' : 'var(--color-primary)',
      color: '#fff',
      borderRadius: 'var(--radius-pill)',
      padding: '2px 7px',
      lineHeight: 1.2
    }
  }, badge), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-secondary)'
    }
  }, count));
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Underline tabs. Active = primary text + 2px underline; inactive = secondary.
 * Optional count badge per tab. Controlled via `value`/`onChange` or
 * uncontrolled via `defaultValue`.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const first = items[0] && (items[0].value ?? items[0]);
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '28px',
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, rest), items.map(it => {
    const item = typeof it === 'string' ? {
      value: it,
      label: it
    } : it;
    const on = item.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      onClick: () => select(item.value),
      style: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '12px 0',
        marginBottom: '-1px',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-body)',
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        color: on ? 'var(--color-primary)' : 'var(--text-secondary)',
        borderBottom: on ? '2px solid var(--color-primary)' : '2px solid transparent',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, item.label, item.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        fontWeight: 'var(--fw-semibold)',
        background: on ? 'var(--blue-tint)' : 'var(--neutral-tint)',
        color: on ? 'var(--color-primary)' : 'var(--text-secondary)',
        borderRadius: 'var(--radius-pill)',
        padding: '1px 8px',
        lineHeight: 1.6
      }
    }, item.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Sidebar.jsx
try { (() => {
/* global React */
// Datatomic app — left sidebar. Composes NavItem from the design system.
(function () {
  const {
    NavItem,
    Avatar,
    Badge
  } = window.DatatomicDesignSystem_bfa30f;
  function Icon({
    name,
    size = 18
  }) {
    return /*#__PURE__*/React.createElement("i", {
      "data-lucide": name,
      style: {
        width: size,
        height: size,
        display: 'flex'
      }
    });
  }
  const NAV = {
    Principal: [{
      id: 'dashboard',
      label: 'Tableau de bord',
      icon: 'layout-dashboard'
    }, {
      id: 'contacts',
      label: 'Contacts',
      icon: 'database'
    }, {
      id: 'segments',
      label: 'Segments',
      icon: 'share-2'
    }, {
      id: 'campagnes',
      label: 'Campagnes',
      icon: 'send',
      count: 2
    }, {
      id: 'connecteurs',
      label: 'Connecteurs',
      icon: 'zap',
      badge: 'BETA'
    }],
    Outils: [{
      id: 'agent',
      label: 'Agent IA',
      icon: 'bot',
      badge: 'NEW'
    }, {
      id: 'studio',
      label: 'Studio Créa.',
      icon: 'pencil'
    }, {
      id: 'activations',
      label: 'Activations',
      icon: 'calendar'
    }],
    Aide: [{
      id: 'formations',
      label: 'Formations',
      icon: 'headphones'
    }, {
      id: 'support',
      label: 'Support',
      icon: 'life-buoy'
    }]
  };
  function Sidebar({
    active,
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 'var(--sidebar-width)',
        flexShrink: 0,
        height: '100%',
        background: 'var(--surface-sidebar)',
        borderRight: '1px solid var(--border-default)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 20px 16px'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/datatomic-logo.svg",
      alt: "Datatomic",
      style: {
        height: 30
      }
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        flex: 1,
        overflowY: 'auto',
        paddingBottom: 12
      }
    }, Object.entries(NAV).map(([section, items]) => /*#__PURE__*/React.createElement("div", {
      key: section,
      style: {
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 'var(--fw-semibold)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-label)',
        color: 'var(--text-secondary)',
        padding: '12px 20px 6px'
      }
    }, section), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingRight: 12
      }
    }, items.map(it => /*#__PURE__*/React.createElement(NavItem, {
      key: it.id,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: it.icon
      }),
      active: active === it.id,
      badge: it.badge,
      count: it.count,
      onClick: () => onNavigate(it.id)
    }, it.label)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--border-default)',
        padding: '14px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Camille Dupont",
      size: 36
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 'var(--fw-semibold)',
        color: 'var(--text-primary)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, "Camille Dupont"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-secondary)'
      }
    }, "\xC9tude Dupont \xB7 Notaire")), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 16
    })));
  }
  window.DatatomicApp = Object.assign(window.DatatomicApp || {}, {
    Sidebar,
    Icon
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Topbar.jsx
try { (() => {
/* global React */
// Datatomic app — top bar with page title, search and quick actions.
(function () {
  const {
    Input,
    Button,
    IconButton
  } = window.DatatomicDesignSystem_bfa30f;
  const {
    Icon: TbIcon
  } = window.DatatomicApp;
  function Topbar({
    title,
    subtitle,
    action
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        padding: '20px 32px',
        borderBottom: '1px solid var(--border-default)',
        background: 'var(--surface-app)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 'var(--text-h2)',
        fontWeight: 'var(--fw-bold)',
        color: 'var(--text-primary)',
        letterSpacing: 'var(--ls-tight)'
      }
    }, title), subtitle && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-secondary)',
        marginTop: 2
      }
    }, subtitle)), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 260
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Rechercher\u2026",
      iconLeft: /*#__PURE__*/React.createElement(TbIcon, {
        name: "search",
        size: 16
      })
    })), /*#__PURE__*/React.createElement(IconButton, {
      label: "Notifications",
      variant: "outlined"
    }, /*#__PURE__*/React.createElement(TbIcon, {
      name: "bell",
      size: 18
    })), action);
  }
  window.DatatomicApp = Object.assign(window.DatatomicApp || {}, {
    Topbar
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens.jsx
try { (() => {
/* global React */
// Datatomic app — main screens. Composes design-system primitives.
(function () {
  const DS = window.DatatomicDesignSystem_bfa30f;
  const {
    KpiCard,
    Card,
    Badge,
    Tag,
    Avatar,
    Button,
    Tabs,
    Checkbox,
    IconButton,
    Select,
    EmptyState,
    Input
  } = DS;
  const {
    Icon
  } = window.DatatomicApp;

  /* ---------- shared table primitives ---------- */
  const Th = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: 'left',
      padding: '12px 16px',
      fontSize: 12,
      fontWeight: 'var(--fw-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-label)',
      color: 'var(--text-secondary)',
      borderBottom: '1px solid var(--border-default)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
  const Td = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 16px',
      fontSize: 14,
      color: 'var(--text-primary)',
      borderBottom: '1px solid var(--border-soft)',
      ...style
    }
  }, children);

  /* ============================ DASHBOARD ============================ */
  function Dashboard() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(KpiCard, {
      value: "16 791",
      label: "Contacts actifs",
      tone: "blue",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "database",
        size: 20
      }),
      delta: "+12%"
    }), /*#__PURE__*/React.createElement(KpiCard, {
      value: "2",
      label: "Campagnes actives",
      tone: "green",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "rocket",
        size: 20
      })
    }), /*#__PURE__*/React.createElement(KpiCard, {
      value: "48,3 %",
      label: "Taux d'ouverture",
      tone: "orange",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "mail-open",
        size: 20
      }),
      delta: "-3%",
      deltaTrend: "down"
    }), /*#__PURE__*/React.createElement(KpiCard, {
      value: "12",
      label: "Segments",
      tone: "info",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "share-2",
        size: 20
      })
    })), /*#__PURE__*/React.createElement(Card, {
      title: "Campagnes r\xE9centes",
      actions: /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        variant: "secondary"
      }, "Tout voir"),
      padding: 0
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Th, null, "Campagne"), /*#__PURE__*/React.createElement(Th, null, "Statut"), /*#__PURE__*/React.createElement(Th, null, "Cible"), /*#__PURE__*/React.createElement(Th, null, "Ouvertures"), /*#__PURE__*/React.createElement(Th, {
      style: {
        width: 40
      }
    }))), /*#__PURE__*/React.createElement("tbody", null, [['Relance notaires Q2', 'active', '2 547', '52,1 %'], ['Bienvenue nouveaux contacts', 'active', '1 204', '61,8 %'], ['Newsletter immobilier — Mai', 'done', '8 912', '43,7 %'], ['Offre partenaires', 'done', '640', '38,2 %']].map(([name, status, cible, open], i) => /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement(Td, {
      style: {
        fontWeight: 'var(--fw-bold)'
      }
    }, name), /*#__PURE__*/React.createElement(Td, null, status === 'active' ? /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Active") : /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 13
      })
    }, "Termin\xE9e")), /*#__PURE__*/React.createElement(Td, {
      style: {
        fontVariantNumeric: 'tabular-nums',
        color: 'var(--text-secondary)'
      }
    }, cible), /*#__PURE__*/React.createElement(Td, {
      style: {
        fontVariantNumeric: 'tabular-nums'
      }
    }, open), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(IconButton, {
      label: "Options",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "more-vertical",
      size: 16
    })))))))));
  }

  /* ============================ CONTACTS ============================ */
  const CONTACTS = [['Marie Robert', 'm.robert@etude-robert.fr', 'Notaires', 'active'], ['Léo Bernard', 'leo.bernard@gmail.com', 'Immobilier', 'active'], ['Sofia Khan', 's.khan@cabinet-khan.fr', 'Notaires', 'inactive'], ['Thomas Petit', 't.petit@agence-petit.fr', 'Immobilier', 'active'], ['Camille Roy', 'camille.roy@orange.fr', 'Particuliers', 'active'], ['Hugo Moreau', 'h.moreau@moreau-immo.fr', 'Immobilier', 'inactive'], ['Inès Lefevre', 'ines.l@notaires-lefevre.fr', 'Notaires', 'active']];
  function Contacts() {
    const [tab, setTab] = React.useState('tous');
    const [sel, setSel] = React.useState({});
    const rows = CONTACTS.filter(c => tab === 'tous' || (tab === 'actifs' ? c[3] === 'active' : c[3] === 'inactive'));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 20px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      items: [{
        value: 'tous',
        label: 'Tous',
        count: 16791
      }, {
        value: 'actifs',
        label: 'Actifs',
        count: 14203
      }, {
        value: 'inactifs',
        label: 'Inactifs',
        count: 2588
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Select, {
      placeholder: "Segment",
      options: ['Tous les segments', 'Notaires', 'Immobilier', 'Particuliers']
    }), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 16
      })
    }, "Importer"))), /*#__PURE__*/React.createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Th, {
      style: {
        width: 44
      }
    }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Th, null, "Contact"), /*#__PURE__*/React.createElement(Th, null, "Segment"), /*#__PURE__*/React.createElement(Th, null, "Statut"), /*#__PURE__*/React.createElement(Th, {
      style: {
        width: 40
      }
    }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(([name, email, seg, status], i) => /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Checkbox, {
      checked: !!sel[i],
      onChange: e => setSel(s => ({
        ...s,
        [i]: e.target.checked
      }))
    })), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: name,
      size: 36
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 'var(--fw-bold)'
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-secondary)'
      }
    }, email)))), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Tag, {
      color: seg === 'Notaires' ? '#2D4BF0' : seg === 'Immobilier' ? '#FF4576' : '#3be2c0'
    }, seg)), /*#__PURE__*/React.createElement(Td, null, status === 'active' ? /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Actif") : /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Inactif")), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(IconButton, {
      label: "Options",
      size: "sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "more-vertical",
      size: 16
    })))))))));
  }

  /* ============================ SEGMENTS ============================ */
  const SEGMENTS = [['Notaires actifs', 4203, '#2D4BF0', 'database'], ['Agents immobiliers', 6891, '#FF4576', 'home'], ['Nouveaux contacts 30j', 1204, '#3be2c0', 'sparkles'], ['Inactifs à relancer', 2588, '#3765fd', 'clock']];
  function Segments({
    empty
  }) {
    if (empty) {
      return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(EmptyState, {
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "share-2",
          size: 24
        }),
        title: "Rien \xE0 afficher",
        description: "Cr\xE9ez votre premier segment pour cibler vos contacts par crit\xE8res.",
        action: /*#__PURE__*/React.createElement(Button, {
          create: true
        }, "Nouveau segment")
      }));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 16
      }
    }, SEGMENTS.map(([name, count, color, icon], i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      interactive: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: 11,
        background: color + '1A',
        color,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 'var(--fw-bold)',
        color: 'var(--text-primary)'
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-secondary)',
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontVariantNumeric: 'tabular-nums',
        fontWeight: 'var(--fw-semibold)',
        color: 'var(--text-primary)'
      }
    }, count.toLocaleString('fr-FR')), " contacts")), /*#__PURE__*/React.createElement(IconButton, {
      label: "Options"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "more-vertical",
      size: 16
    }))))));
  }
  window.DatatomicApp = Object.assign(window.DatatomicApp || {}, {
    Dashboard,
    Contacts,
    Segments
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.KpiCard = __ds_scope.KpiCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
