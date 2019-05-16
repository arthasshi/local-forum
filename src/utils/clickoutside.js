/**
 * 点击非添加此指令的元素
 */
export default {
  bind(el, binding) {
    function handlerDocument(event) {
      if (el.contains(event.target)) return;
      if (binding.expression) {
        binding.value();
      }
    }
    document.addEventListener('click', handlerDocument);
  },
};
