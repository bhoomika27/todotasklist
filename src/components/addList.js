import React, { PureComponent } from 'react'
import './addList.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionsTodo from '../actions/actionsTodo'
import moment from 'moment';

var counter=0;
class AddList extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            // title:'',
            // desc:'',
            // status:'pending',
            today:null,
            days:undefined
            // dueDate:null,

        }
    }
    static getDerivedStateFromProps(props, state){
        return null;
      
        
    }
    componentDidMount(){
        this.interval = setInterval(() => {
        if(this.props.todoApp.dueDate===undefined){this.getDate();}
}, 1000);
        
    }

    handleSubmit=(e)=>{

        e.preventDefault();
        counter+=1;
        this.props.setTaskList(counter);
    }

    calcDueDays=(e)=>{
        if(e.target.name==='dueDate'){
            let newDate = new Date()
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();
            var dueDate= new Date(e.target.value)
            let date1 = dueDate.getDate();
            let month1 = dueDate.getMonth() + 1;
            let year1 = dueDate.getFullYear();
        var a = moment([year, month,date]);
        var b = moment([year1, month1, date1]);
        var days=b.diff(a, 'days')
        this.props.setDateFieldsValue(e.target.name,e.target.value,days+1)
                }}
    handleInputValues =(e)=>{
        this.props.setFieldsValue(e.target.name,e.target.value)        
    }

    getDate=()=>{
        var today= new Date().toJSON().split('T')[0];
        this.setState({today:today})
    }
    handleEditList=()=>{
        this.props.setEditedList();
    }
       
    render() {
        return (
            <div id="container">
                <h2 id="todoHeading" className="todoHeading">Your TODO Bucket!!</h2>
                <form id="taskForm" onSubmit={this.handleSubmit} > 
                <div className="titleDiv">
                <label className="titleLabel" >Title</label>
                <input type="text" id="title" maxLength="50" name="title" className="title" placeholder="Enter Title" 
                value={this.props.todoApp.title} onChange={this.handleInputValues}></input>
                </div>
                <div className="descDiv">
                <label className="descLabel" htmlFor="description">Description</label>
                <textarea type="text" id="Description" maxLength="250" name="desc"  value={this.props.todoApp.desc}
                className="Description" placeholder="Enter Title" onChange={this.handleInputValues}></textarea>
                </div>
                <div className="statusDiv">
                <label className="titleLabel" htmlFor="business">Status</label>
                <select id="status" name="status" value={this.props.todoApp.status} className="business" onChange={this.handleInputValues}>
                    <option value="pending">PENDING</option>
                    <option value="completed">COMPLETED</option>
                </select>
                </div>
                <div className="dueDayDiv">
                <label className="titleLabel" htmlFor="start">Title</label>
                <input type="date" id="dueDate" name="dueDate" className="dueDate" 
                value={this.props.todoApp.dueDate===undefined?this.state.today:this.props.todoApp.dueDate} 
                    onChange={this.calcDueDays}  
                    min={this.state.today} />
                </div>
                {this.props.todoApp.edit? <button className="addBtn" onClick={this.handleEditList}>SAVE CHANGES</button>:''}
                
                <button type="submit" className="addBtn">ADD TASK</button>
                </form>
            </div>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setFieldsValue:actionsTodo.setFieldsValue,
        setDateFieldsValue:actionsTodo.setDateFieldsValue,
        setTaskList:actionsTodo.setTaskList,
        setEditedList:actionsTodo.setEditedList
    },dispatch)
};
const mapStateToProps = (state) => {
    return {
        todoApp: state.todoApp
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddList);