//  hasClass
// export function hasClass(el, cls) {
//   if (!el || !cls) return;
//   if (cls.includes(' ')) {
//     throw new Error('className should not contain space');
//   }
//   if (el.classList) {
//     return el.classList.contains(cls);
//   }
//   return (` ${el.className} `).indexOf(` ${cls} `) > -1;
// }

// addClass
// export function addClass(el, cls) {
//   if (!el) return;
//   let curClass = el.className;
//   const addClass = (cls || '').split(' ');
//   for (let i = 0, len = addClass.length; i < len; i++) {
//     if (el.classList) {
//       el.classList.add(addClass[i]);
//     } else if (!hasClass(el, addClass[i])) {
//       curClass += ` ${addClass[i]}`;
//     }
//   }
//   if (!el.classList) {
//     el.className = curClass;
//   }
// }

// removeClass
// export function removeClass(el, cls) {
//   if (!el || !cls) return;
//   let curClass = ` ${el.className} `;
//   const rmClass = (cls || '').split(' ');
//   for (let c = 0, len = rmClass.length; c < len; c++) {
//     const clsName = rmClass[c];
//     if (!clsName) continue;
//     if (el.classList) {
//       el.classList.remove(clsName);
//     } else if (hasClass(el, clsName)) {
//       curClass = curClass.replace(` ${clsName} `, '');
//     }
//   }
//   if (!el.classList) {
//     el.className = curClass;
//   }
// }

// toggleClass

// export function toggleClass(el, cls) {
//   if (!el || !cls) return;
//   if (cls.indexOf(' ') > -1) {
//     throw new Error('className should not contain space');
//   }
//   let currentClass = ` ${el.className} `;
//   const classArray = currentClass.split(' ');
//   if (el.classList) {
//     el.classList.toggle(cls);
//   } else {
//     const index = classArray.indexOf(cls);
//     if (index > -1) {
//       classArray.splice(index, 1);
//     } else {
//       classArray.push(cls);
//     }
//     currentClass = classArray.join(' ');
//     el.className = currentClass;
//   }
// }
