export default function initToolTip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    },
  };
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.removeEventListener('mouseleave', onMouseLeave);
      this.removeEventListener('mousemove', onMouseMove);
    },
  };

  function criarTooltipBox(element) {
    const text = element.getAttribute('aria-label');
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
  function HandleMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    onMouseMove.tooltipBox = tooltipBox;

    this.addEventListener('mouseleave', onMouseLeave);
    this.addEventListener('mousemove', onMouseMove);
  }
  tooltips.forEach((item) => {
    item.addEventListener('mouseover', HandleMouseOver);
  });
}
