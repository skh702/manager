import React from 'react'
import { post } from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { withStyles } from '@mui/styles';


const styles = theme => ({
    hidden:{
        display:'none'
    }
})
class CustomerAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        }
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();
        this.addCustomer()
            .then((response) => {
              console.log(response.data);
              this.props.stateRefresh();
             })
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        })
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url='/api/customers';
        const formData = new FormData();
        formData.append('image',this.state.file)
        formData.append('name', this.state.userName)
        formData.append('birthday', this.state.birthday)
        formData.append('gender', this.state.gender)
        formData.append('job', this.state.job)
        const config = {
            headers:{
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    handleClickOpen = () => {
        this.setState({
            open:true
        })
    }

    handleClickClose = () => {
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>?????? ????????????</Button>
                <Dialog open={this.state.open} onClose={this.handleClickClose}>
                    <DialogTitle>?????? ??????</DialogTitle>
                    <DialogContent>
                        <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                        <label htmlFor='raised-button-file'>
                            <Button variant='contained' color="primary" component="span" name="file">
                                {this.state.fileName === "" ? "????????? ????????? ??????" : this.state.fileName}
                            </Button>
                        </label>
                        <br/>
                        <TextField label="??????" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
                        <TextField label="????????????" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
                        <TextField label="??????" type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} />
                        <TextField label="??????" type="text" name="job" value={this.state.job} onChange={this.handleValueChange} />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit} >????????????</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClickClose} >??????</Button>
                    </DialogActions>
                </Dialog>
            </div>

            /*
            <form onSubmit={this.handleFormSubmit}>
                <h1>?????? ??????</h1>
                ????????? ?????????: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/>
                ??????: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
                ????????????: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
                ??????: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} />
                ??????: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} />
                <button type="submit">????????????</button>
            </form>
            */
        )
    }
}

export default withStyles (styles) (CustomerAdd)
