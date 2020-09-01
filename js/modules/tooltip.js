export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind sempre que tiver callback
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // move a tooltip com base no estilo de acordo
  // com a posicao do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // remove a tooltip mouseleav
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  // criar a tooltip box e coloca no body
  criarTooltipBox(element) {
    const text = element.getAttribute('aria-label');
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // cria a tootilp e adicona os eventos ao target
  onMouseOver({ currentTarget }) {
    // cria a tooltipboxe bota prop
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // adiciona os eventos de mouse hover a cada tooltip
  addTooltipsEvents() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvents();
    }
    return this;
  }
}
