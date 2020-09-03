export default class Funcionamento {
  constructor(data, activeClass) {
    this.funcionamento = document.querySelector(data);
    this.activeClass = activeClass;
  }

  // pega o a data do funcionamento e os dados
  dadosFuncionamento() {
    this.diasDaSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  // pegando os horarios agora
  dadosAgora() {
    this.dataAgora = new Date();
    // pegando dia
    this.diaAgora = this.dataAgora.getDay();
    // pegando a hora utc - 3
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  // verificando se esta aberto
  estaAberto() {
    // vendo se esta aberto na semana
    const semanaAberto = this.diasDaSemana.indexOf(this.diaAgora) !== -1;
    // vendo se o horario da semana abre
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0]
      && this.horarioAgora < this.horarioSemana[1]);

    // return true ou false
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    // so vai ativar o aberto se estiver aberto
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    // se tiver funcionamento
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
