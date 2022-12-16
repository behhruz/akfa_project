import React from "react";
import "./akfa.css";
import icon from "./assets/icon.png";
import photo from "./assets/1.png";
import photoo from "./assets/2.png";
import akfa from "./assets/akfa.png";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      active: false,
    };
  }

  render() {
    const addfifty = () => {
      this.setState({ count: this.state.count + 150 });
      this.setState({ active: true });
    };
    const hudred = () => {
      this.setState({ count: this.state.count + 100 });
    };
    const five = () => {
      this.setState({ count: this.state.count + 5 });
    };
    const up = ({ target: { value } }) => {
      this.setState({ count: +value });
    };
    return (
      <div className="container">
        <h1 className="calculator">Калькулятор стоимости</h1>
        <div className="buttons">
          <button className="btn1">Калькулятор окон</button>
          <button className="btn1">Калькулятор балконов</button>
        </div>
        <div className="container2">
          <div className="smallcon">
            <h1 className="tip">Тип окна</h1>
            <div className="buttons2">
              <button className="btn2">Двустворчатое</button>
              <button className="btn2">Трехстворчатое</button>
              <button className="btn2">Балконный блок</button>
            </div>
            <div className="icons">
              <h1 className="tip">Тип открывания</h1>
              <img className="icon" src={icon} />
            </div>
            <div className="photo">
              <img className="window" src={photo} onClick={addfifty} />
              <img className="window" src={photoo} onClick={hudred} />
            </div>
            <h1 className="tip">Тип окна</h1>
            <div className="check">
              <input type="checkbox" onClick={five} />
              <p className="panel">Панельный</p>
              <input type="checkbox" onClick={five} />
              <p className="panel">Кирпичный</p>
            </div>
            <h1 className="tip">Тип профиля</h1>
            <div className="check">
              <input type="checkbox" onClick={five} />
              <p className="panel">Эконом (Alpenprof)</p>
              <input className="box" type="checkbox" onClick={five} />
              <p className="panel">Комфорт (КБЕ, Grain)</p>
            </div>
            <div className="checkk">
              <input type="checkbox" onClick={five} />
              <p className="panel">Стандарт (GoodWin, EXPROF)</p>
              <input type="checkbox" onClick={five} />
              <p className="panel">Премиум (Veka, Rehau)</p>
            </div>
            <div className="box2">
              <div className="minibox">
                <h1 className="tip">Дополнительно</h1>
                <div className="checkm">
                  <div className="div1">
                    <input type="checkbox" onClick={five} />
                    <p className="panel">Монтажные работы</p>
                  </div>
                  <div className="div1">
                    <input type="checkbox" onClick={five} />
                    <p className="panel">Подоконник, водоотлив</p>
                  </div>
                </div>
              </div>
              <div className="minibox1">
                <h1 className="tip">Ламинация</h1>
                <div className="checkm">
                  <div className="div1">
                    <input type="checkbox" onClick={five} />
                    <p className="panel">Без ламинации</p>
                  </div>
                  <div className="div1">
                    <input type="checkbox" onClick={five} />
                    <p className="panel">С ламинацией</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="linear">
            <h1 className="razmer">Размеры</h1>
            <div className="biglen">
              <div className="length">
                <p>Ширина</p>
                <button className="btn_1">2500</button>
              </div>
              <div className="length too">
                <p>Высота</p>
                <button className="btn_1">2500</button>
              </div>
            </div>
            <div className="grad">
              <input
                className="range"
                type="range"
                max={2500}
                min={100}
                onChange={up}
              />
              <img className="akfa" src={akfa} />
            </div>
            <input
              className="rangee"
              type="range"
              max={2500}
              min={100}
              onChange={up}
            />
            <div className="icons">
              <h1 className="tip">Cтоимость</h1>
              <img className="icon" src={icon} />
              <h1 className="tip name">{this.state.count}$</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
