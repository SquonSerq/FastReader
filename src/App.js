import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sourceText: "Где-то в 3.00 полил дождь, и я вышел погулять по Городку, чувствуя себя совершенно несчастным. Я разглядывал все автомобили, припаркованные на стоянке, и устал даже от мысли о том, сколько энергии ушло у этих людей на то, чтобы найти ту самую машину. И еще я заметил во всех автомобилях Городка нечто сумрачное: ни на одном из них нет никаких наклеек на бамперах, как будто все они подвергаются цензуре. Наверное, это свидетельствует о страхе чего-то.Ох уж эти маленькие страхи! Страх произвести недостаточно; страх не найти маленький с красными буковками акционерный конвертик в своем отделении для бумаг; страх потерять ощущение, что ты вообще еще что-то производишь; страх по поводу медленного сокращения льгот внутри компании; страх того, что годы роста никто не вернет; страх того, что на самом деле всем процессом руководит чья-то цель; страх увольнения... О Боже, вы только меня послушайте. Какой пессимист! Я думаю, было бы намного легче разливать «эспрессо» в Линвуде, оставив позади себя герметичную, как в фильме «Биосфера-2», атмосферу «Майкрософта»",
      textToShow: "123",
      textStyle: ""
    }

    this.startReading = this.startReading.bind(this)
    this.nextWord = this.nextWord.bind(this)
  }

  componentDidMount() {
    let sourceText = this.state.sourceText
    let sourceTextArray = sourceText.split(" ")
    this.setState({
      sourceText: sourceTextArray
    })
  }

  nextWord() {
    let sourceTextArray = this.state.sourceText
    let nextWord = sourceTextArray.shift()

    this.setState({
      textToShow: nextWord,
      sourceText: sourceTextArray
    })
  }

  startReading() {
    this.setState({
      textStyle: "animatedText"
    })
    setInterval(() => this.nextWord(), 175)
  }


  render() {
    return (
    <div>
      <h1 id="main-text" className={this.state.textStyle}>{this.state.sourceText[0]}</h1>
      <button id="start-button" onClick={this.startReading}>start</button>
    </div>
      )
  }
}

export default App;
