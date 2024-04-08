import "./second-block.css";
import React,{Component} from "react";
export default class ReadyBlock extends Component{
    render(){
        return(
            <>
            <div className="ready-main">
                <div className="ready-title">
                    Номера и Цены
                </div>
                <div className="ready-main-section">
                    <div className="ready-main-section-content">
                    <h1>
                        Готово
                    </h1>
                    <p>Orxan,ваша заявка на бронирование получена</p>
                    <div className="ready-main-bottom-section">
                        <div className="ready-main-bottom-section-left">
                                <p className="ready-main-bottom-section-left-title">
                                    Когда бронирование будет подтверждено.Вы получите письмо
                                </p>
                                <div className="reservation-details">
                                    <p className="reservation-info">Время заезда&nbsp; &nbsp; &nbsp;&nbsp; 15:00</p>
                                    <p className="reservation-info">Время выезда&nbsp; &nbsp; &nbsp;&nbsp; 12:00</p>
                                    <p className="reservation-info-bold"><b>Информация об отеле</b></p>
                                    <p className="reservation-info">Номер телефона&nbsp; &nbsp; &nbsp;&nbsp;+1-234-5678910 </p>
                                    <p className="reservation-info">Email&nbsp; &nbsp; &nbsp;&nbsp;hotels-support@wix.com</p>
                                    <p className="reservation-info">Адрес&nbsp; &nbsp; &nbsp;&nbsp;40 Hotel Street, New York, US, 4321</p>

                                </div>
                        </div>
                        <div className="ready-main-bottom-section-right">
                            
                        </div>
                    </div>
                </div>    
                </div>           
            </div>
            
            </>
        )
    }
}