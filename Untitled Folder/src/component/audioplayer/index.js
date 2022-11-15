import React from "react";
import "./audioplayer.css";
export default class Audioplayer extends React.Component {
  
  state = {
    songslist:[
    {songimage:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADYASAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYDBQcCAf/EADUQAAEEAQEEBwUIAwAAAAAAAAEAAgMEEQUSITFRBhMUFUFUkiIjM2FxBzJTgYKRocFCUmL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOL93XfLSelfe7bvlpPSregQVMaNqR4UZz+godH1IcaU4/QrrJcbXiL3k48APEqRC2W0K0Qi66za+FCCQ0Dm443j+EHPzp1wHBrvB5L13RqHlJf2XSdU6IX4KgZHNTY4tw5scOM896rdJ8um3OxTyNkiLtkEH7rvogrfdGo+Tl9K8d23fLSeldBwtceJQU7u675aT0r6reiAiIOKCd0godlpUBHA54tsZILTne7a7cS36+G/l+1m6ANaLF63ZiaLIeIcneQAN+Pr/SjdFL0L2yaPqEbZatk+y1/AOWo1YydF+lHZn2nGlYYGvdnLmtO7JzxI5+IQWnpFrrbNa3FobmWbcY9rY9rYHicfJc91bSpuxW9QmNoFkjQx87NkyeBOFf8AR6Pdkj5orsVrMbWV4WRhjeeXHxJ8Sqvqti7NTt0r5if1shEXU/Didv8AYDjjaIx4ZwiIOi2+1VR1jsyM3OPPkV4PE/VaTSb4ozudI0ljhg44hbrOd/NFEREBBxWPtEP40frCCeHI99H6wg33R6MO13T2PGczjdzxv/pYPtbDm6zC7/FzOPzCm9GJqh6UU3SWa7YoI5ZS90rQA7AaBx/6Kj/afap2LleaGevYEbgS1sgcHDkcIK/ous6lpzSwV5Zomu2NktOWHl/I3fMKTqGvPnaWUtLdDbLMOleC9zGcMMB3NGeS0bNVDZorDoWGaNxJcJNzsgNOQc+DQOP5L4L9cR7HZx8PqydtnDa2uGxjj8kENzHBm0WkNPA43Kzt+6Poqy6ZnVbDcAcTl2clWJs8OyPfR8P9wgyosfaIfxo/WEQUlERAREQEREBERAREQf/Z",songname:"Rolling in the Deep",singername:"Adele",duration:"3:21"},
    {songimage:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAEgASAMBIgACEQEDEQH/xAAbAAABBAMAAAAAAAAAAAAAAAAAAQIEBQMGB//EADcQAAIBAwIEAwQIBgMAAAAAAAECAwAEEQUSEyExUQYiQRQyYZFCcYGhscHR8DRSZKLh8QcVM//EABUBAQEAAAAAAAAAAAAAAAAAAAAC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A5NRmkpKlR2TWyeHdkDqSM58xJPX/AB+pPatbQZYVe24ePhWowskpDSH+Udv32oN6lu8aZw7YhGk53Fyc4jX+VR6sfn+Wn6vql0q+z2ErR26eXyooyf1rLe6g2o3kOmwSbYUOCR/cx7n/AFW5eBdFtbxpNRkhHslsxjt4zzJYdXY+p9PnQcuutLv4FWS6gkTeNwL9cVBIKnFdN/5NuFYjaMc+VcyY5JoHq6CF0MKs5ORJuOV+zpRWOigWiirPT7GCK1XU9WV/Y9xWCBW2veOOoB+ig+k/2Dn0B+gabcXTm6EaraxNh7iZxHGG67dzEAn4Dn8Ktdc0WfSbgrqdzwbiRdzJGM7R23fZjl2qLY3slxM+t6qENhpwCwWqDZEz+8kEa+i8tzHrtBJJJBOw+PtSjt9Tiv7hUnv2gVrVJBuSFT5uM4PJmyTtU5AxuPoCGpaGOHqhQHIKsoP5/IV1JNQl8J+C7ZV9mV+FljMWOZHJYgAD49652tl/0xa9vXbjRFY5E/qH8zJ0+hGct2ZgvxroHiWaxurKP2qNZYNvQgHBxyPOg5prfiG51j+JjRSD1TNU5yOtT5bWe/1SSOzg4ryP5Vhj2j5dB+FZvEekzaPc21tc/wDq1sruOxJPL7qCpooooFq7sdGtdSj4y65DBbW8am5N1DLut1J5hQqlW8xbaoYFuw54qLeNZZ0jkmWFCfNK4JCD1OBzP1ep5VPklk1Oaz0fS0MVs06pbxyEZklcheJIR1Y5+pRyHqSF1enT7S0g1UTQXFnbs8GlWHDk2M4ILSSb1XfgkFuWGbavujAS2F5qGsHUbndfXVmkKIr4PtF6/KJPTPmyx7iNvQ1J0/WfDkMl48ytIYUNlpyva8dRbgY3qpwu92Ls24jmwxkbgZdnqmhw6gtlazXJj4jIrhcPvlGJZ9xAGVTESDGc5blmg1rXWF5eJZWtwbiGzDxRyFieO+S0sxJ6l3yR8No9KkpqT3VnHbu5yqgH44rJ4rk0i1uILbSLKOG4tpDxJYVdIyg91MMzFyPV/LnsetUczGN1ni5A/d+/yoLfQLn2TXLZiziJX3PsGSQOeMfHpR481OLVtaS4gSRE4CjEow2eeeXpVfZ3xhDSCIMwHq+KgXEzXE7yye85yaDHRRRQFPhlkgmSaFyksbBkdTgqR6im0lA+Dyyx4HJWH3VnlZVDJENxb33P4Co6nANLlnIUAkk4CgdTQNJOBz5U9XYDBJ245g03acZwcd8Uq5UhipxntQZZhEsaiPmxHNgaj1mBjYkONvYimSIY2KsKBlFLRQFFFFAU6OR42DxOyMOjKcEfbRRQKJZQoXiPtAIC7jjB6j6jS7nkBDyOQTk5YnJ7/XS0UEqG2hWAvcbuZ8pA5YqPMNwBzgAYGe1JRQYaKKKD/9k=",songname:"When We Were Young",singername:"Adele",duration:"3:21"},
    {songimage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksgUBCNDVALchQAdWcQ3MmpfK9B54UKzXWw&usqp=CAU",songname:"Cry Your Heart Out",singername:"Adele",duration:"3:21"},
    {songimage:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADYASAMBIgACEQEDEQH/xAAcAAEAAQQDAAAAAAAAAAAAAAAABgMEBQcBAgj/xAAzEAABAwIFAQMKBwAAAAAAAAABAAIDBBEFBhIhMRNRcZEUFSIjMkFTVGGSB0JzgaGx8f/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/EABkRAQEBAAMAAAAAAAAAAAAAAAABEQISMf/aAAwDAQACEQMRAD8A0v5vrPl5PBPN9Z8vJ4KWIeCs6cQ7yab4bllaPKeYK6PqUmEVcrO1savMNjbJWwseLs1Xd3LfmUmCOiiFuWg2ReRxoAZDzWRcYBXW/SVGpydmSlYX1GDVjGjkmNerAWgWIWKxdjTE+7drI7rHlaow2upiBUUssZIuNTbXC4831ny8ngppnhxbjM0V/RbwOwK3HAWpyWIn5vrPl5PBFLEVowQ8FE527UFY4TC+fEIYme047f2p9h9VWPmDcMixGnkjcWOlE2sXAubse/jubfsUPw4MwzGqKV7tXpXJH1/1bkpzhjaR+IsgiE5Zcy6dxssUxWZW19Zl8ztkdBUtLmPdG3U5pb7RAPd/KilJW1MtfHTz0tfJJI8tE0tRdwI9/ovIA/aylWXaiE4RTSiWN3VmfdocCST7rLKSxUFBE+engiY4i5c1oCC0l+IdFLDjLpCCW9Noc767rHjgLP55xmCqpp6Vj/XyVDXvbp4jA23791gBwFueCiIiQIV068PxY/uCdeIbiWO439oKStWYfNNC2ZjS57W76d9x7+5TPAcYazL7pdIlGm2i43J926gNXmGqqHNf1IoZGnd8IDC7vsq2X8wjDa3XVWnpnuvIy48Qs2U7G08v14ooWGLApI/zPeHM3Pbz9VlccrG+RPlm9TEG6najwLX3Ubgz5kmEAsp9Lg3Ytpzz2cKF5tztJjjxDSN8momuvoLhqfbi9uB9EZVsWFXG+vmqq17S3qvJDTtZo4HfsAuRwFZRYu5kMjXdN8jvZe63o93YrkTw2HrY/uC1IFRF068PxY/uCJSGIiLbIiIpCIikIiKQiIpP/9k=",songname:"Send My Love (To Your New Lover)",singername:"Adele",duration:"3:21"},
    {songimage:"https://images-na.ssl-images-amazon.com/images/I/71X-290hdOL.jpg",songname:"Make You Feel My Love",singername:"Adele",duration:"3:21"},
    {songimage:"https://images.macrumors.com/t/U1y2-rMrcY1n8mKlIGE8XYbWAKM=/1600x1200/smart/article-new/2015/11/adele.jpg",songname:"Someone Like You",singername:"Adele",duration:"3:21"}],
    currentsong:[
      {currentimage:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADYASAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYDBQcCAf/EADUQAAEEAQEEBwUIAwAAAAAAAAEAAgMEEQUSITFRBhMUFUFUkiIjM2FxBzJTgYKRocFCUmL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOL93XfLSelfe7bvlpPSregQVMaNqR4UZz+godH1IcaU4/QrrJcbXiL3k48APEqRC2W0K0Qi66za+FCCQ0Dm443j+EHPzp1wHBrvB5L13RqHlJf2XSdU6IX4KgZHNTY4tw5scOM896rdJ8um3OxTyNkiLtkEH7rvogrfdGo+Tl9K8d23fLSeldBwtceJQU7u675aT0r6reiAiIOKCd0godlpUBHA54tsZILTne7a7cS36+G/l+1m6ANaLF63ZiaLIeIcneQAN+Pr/SjdFL0L2yaPqEbZatk+y1/AOWo1YydF+lHZn2nGlYYGvdnLmtO7JzxI5+IQWnpFrrbNa3FobmWbcY9rY9rYHicfJc91bSpuxW9QmNoFkjQx87NkyeBOFf8AR6Pdkj5orsVrMbWV4WRhjeeXHxJ8Sqvqti7NTt0r5if1shEXU/Didv8AYDjjaIx4ZwiIOi2+1VR1jsyM3OPPkV4PE/VaTSb4ozudI0ljhg44hbrOd/NFEREBBxWPtEP40frCCeHI99H6wg33R6MO13T2PGczjdzxv/pYPtbDm6zC7/FzOPzCm9GJqh6UU3SWa7YoI5ZS90rQA7AaBx/6Kj/afap2LleaGevYEbgS1sgcHDkcIK/ous6lpzSwV5Zomu2NktOWHl/I3fMKTqGvPnaWUtLdDbLMOleC9zGcMMB3NGeS0bNVDZorDoWGaNxJcJNzsgNOQc+DQOP5L4L9cR7HZx8PqydtnDa2uGxjj8kENzHBm0WkNPA43Kzt+6Poqy6ZnVbDcAcTl2clWJs8OyPfR8P9wgyosfaIfxo/WEQUlERAREQEREBERAREQf/Z",currentname:"Rolling in the Deep",singername:"Adele",start:"1:03",finish:"3:21"}
    ]
    // showCalendarTable: true,
    // showMonthTable: false,
    // dateObject: moment(),
    // allmonths: moment.months(),
    // showYearNav: false,
    // selectedDay: null
  };
// //   weekdayshort = moment.weekdaysShort();

//   daysInMonth = () => {
//     return this.state.dateObject.daysInMonth();
//   };
//   year = () => {
//     return this.state.dateObject.format("Y");
//   };
//   currentDay = () => {
//     return this.state.dateObject.format("D");
//   };
//   firstDayOfMonth = () => {
//     let dateObject = this.state.dateObject;
//     let firstDay = moment(dateObject).startOf("month").format("d"); 
//     return firstDay;
//   };
//   month = () => {
//     return this.state.dateObject.format("MMMM");
//   };
//   showMonth = () => {
//     this.setState({
//       showMonthTable: !this.state.showMonthTable,
//       showCalendarTable: !this.state.showCalendarTable
//     });
//   };
//   setMonth = month => {
//     let monthNo = this.state.allmonths.indexOf(month);
//     let dateObject = Object.assign({}, this.state.dateObject);
//     dateObject = moment(dateObject).set("month", monthNo);
//     this.setState({
//       dateObject: dateObject,
//       showMonthTable: !this.state.showMonthTable,
//       showCalendarTable: !this.state.showCalendarTable
//     });
//   };
//   setYear = year => {
//     let dateObject = Object.assign({}, this.state.dateObject);
//     dateObject = moment(dateObject).set("year", year);
//     this.setState({
//       dateObject: dateObject,
//       showMonthTable: !this.state.showMonthTable,
//       showYearNav: !this.state.showYearNav,
//       showMonthTable: !this.state.showMonthTable
//     });
//   };
//   MonthList = props => {
//     let months = [];
//     props.data.map(data => {
//       months.push(
//         <td className="calendar-month" onClick={e => {this.setMonth(data);}}>
//           <span>{data}</span>
//         </td>
//       );
//     });
//     let rows = [];
//     let cells = [];

//     months.forEach((row, i) => {
//       if (i % 3 !== 0 || i == 0) {
//         cells.push(row);
//       } else {
//         rows.push(cells);
//         cells = [];
//         cells.push(row);
//       }
//     });
//     rows.push(cells);
//     let monthlist = rows.map((d, i) => {
//       return <tr>{d}</tr>;
//     });

//     return (
//       <table className="calendar-month">
//         <thead>
//           <tr>
//             <th colSpan="4">Select a Month</th>
//           </tr>
//         </thead>
//         <tbody>{monthlist}</tbody>
//       </table>
//     );
//   };
//   showYearEditor = () => {
//     this.setState({
//       showYearNav: true,
//       showCalendarTable: !this.state.showCalendarTable
//     });
//   };

//   onPrev = () => {
//     let curr = "";
//     if (this.state.showMonthTable == true) {
//       curr = "year";
//     } else {
//       curr = "month";
//     }
//     this.setState({
//       dateObject: this.state.dateObject.subtract(1, curr)
//     });
//   };
//   onNext = () => {
//     let curr = "";
//     if (this.state.showMonthTable == true) {
//       curr = "year";
//     } else {
//       curr = "month";
//     }
//     this.setState({
//       dateObject: this.state.dateObject.add(1, curr)
//     });
//   };
//   onYearChange = e => {
//     this.setYear(e.target.value);
//   };
//   getDates(startDate, stopDate) {
//     var dateArray = [];
//     var currentDate = moment(startDate);
//     var stopDate = moment(stopDate);
//     while (currentDate <= stopDate) {
//       dateArray.push(moment(currentDate).format("YYYY"));
//       currentDate = moment(currentDate).add(1, "year");
//     }
//     return dateArray;
//   }
//   YearTable = props => {
//     let months = [];
//     let nextten = moment()
//       .set("year", props)
//       .add("year", 12)
//       .format("Y");

//     let tenyear = this.getDates(props, nextten);

//     tenyear.map(data => {
//       months.push(
//         <td key={data} className="calendar-month" onClick={e => {this.setYear(data);}}>
//           <span>{data}</span>
//         </td>
//       );
//     });
//     let rows = [];
//     let cells = [];

//     months.forEach((row, i) => {
//       if (i % 3 !== 0 || i == 0) {
//         cells.push(row);
//       } else {
//         rows.push(cells);
//         cells = [];
//         cells.push(row);
//       }
//     });
//     rows.push(cells);
//     let yearlist = rows.map((d, i) => {
//       return <tr>{d}</tr>;
//     });

//     return (
//       <table className="calendar-month">
//         <thead>
//           <tr>
//             <th colSpan="4">Select a Year</th>
//           </tr>
//         </thead>
//         <tbody>{yearlist}</tbody>
//       </table>
//     );
//   };
//   onDayClick = (e, d) => {
//     this.setState(
//       {
//         selectedDay: d
//       }
//     );
//   };
  render() {
    // let weekdayshortname = this.weekdayshort.map(day => {
    //   return <th>{day}</th>;
    // });
    // let blanks = [];
    // for (let i = 0; i < this.firstDayOfMonth(); i++) {
    //   blanks.push(<td className="calendar-day empty">{""}</td>);
    // }
    // let daysInMonth = [];
    // for (let d = 1; d <= this.daysInMonth(); d++) {
    //   let currentDay = d == this.currentDay() ? "today" : "";
    //   daysInMonth.push(
    //     <td  className={`calendar-day ${currentDay}`}>
    //       <span onClick={e => {this.onDayClick(e, d);}}>{d}</span>
    //     </td>
    //   );
    // }
    // var totalSlots = [...blanks, ...daysInMonth];
    // let rows = [];
    // let cells = [];

    // totalSlots.forEach((row, i) => {
    //   if (i % 7 !== 0) {
    //     cells.push(row);
    //   } else {
    //     rows.push(cells);
    //     cells = [];
    //     cells.push(row);
    //   }
    //   if (i === totalSlots.length - 1) {
    //     rows.push(cells);
    //   }
    // });

    // let daysinmonth = rows.map((d, i) => {
    //   return <tr>{d}</tr>;
    // });

    return (
      
      < >
      <div className='container'>
      <div className="current">

<div>

<div className="row1 m-0">
  {this.state.currentsong.map((current, index) => {
    return (

      <div className="col-12 col-md-6 col-lg-12">
        <div className="currentlist">
          <img className="currentimage" src={current.currentimage}></img>
          <div className="currentdesc">
            <div className="namedesc">
            <p ><b>{current.currentname}</b></p><br />
            <p  style={{color:"gray"}}>{current.singername}</p></div>
          <div className="menu"><svg xmlns="http://www.w3.org/2000/svg" transform="rotate(90)"  width="29" height="29" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
            </div>
            <div id="range">
              <p className="currentsduration" style={{fontSize:"smaller",marginBottom:"-.4rem"}}>{current.start}</p>
              <p className="currentsduration" style={{fontSize:"smaller",opacity:"60%",marginLeft:"15rem"}}>{current.finish}</p>
    <input type="range" id="range-val" value="46" min="0" max="143"/>
    
  </div>   
                    {/* <audio style="width: 100%;" class="fc-media">
                        <source src="https://mariongrandvincent.github.io/HTML-Personal-website/img-codePen/kygo-stole-the-show.mp3" type="audio/mp3"/>
                    </audio> */}
                
            </div>
           
          </div>
        
      </div>
    )
  })}
</div>
</div>
<div className="svglist">

<span>
<svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:"1rem"}} opacity="40%" width="30" height="30" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" opacity="40%" width="30" height="30" fill="currentColor" class="bi bi-repeat" viewBox="0 0 16 16">
  <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"/>
</svg>
</span>

<span style={{margin:"0rem 3rem"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
  <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" style={{margin:"0rem 1rem"}} width="40" height="40" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-fast-forward-fill" viewBox="0 0 16 16">
  <path d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"/>
  <path d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"/>
</svg>
</span>

<span>
<svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:"1rem"}} opacity="40%" width="35" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" opacity="40%" width="30" height="30" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
  <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
</svg></span>
</div>


      </div>
       <div className="list">

      <div className="row m-0">
        {this.state.songslist.map((song, index) => {
          return (

            <div className="col-12 col-md-6 col-lg-12">
              <div className="songlist">
              <svg xmlns="http://www.w3.org/2000/svg"  transform="rotate(90)"  width="33" height="33" fill="currentColor" class="bi bi-pause" viewBox="0 0 16 16">
  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
</svg>
                <img className="songimage" src={song.songimage}></img>
                <div className="songdesc">
                  <p href={song.hreff}><b>{song.songname}</b></p><br />
                  <p href={song.hreff} style={{color:"gray"}}>{song.singername}</p><br /></div>
                  <div className="songtime"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
                  <p className="songsduration">{song.duration}</p></div>
                </div>
              
            </div>
          )
        })}
      </div></div></div>
      </>
    );
  }
}