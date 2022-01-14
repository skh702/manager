import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

class CustomerDelete extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    handleClickOpen = () => {
        this.setState({
            open:true
        })
    }

    handleClickClose = () => {
        this.setState({
            open: false
        })
    }

    deleteCustomer(id) {
        const url='/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }
    render(){
        return (
            <div>
            <Button variant='contained' color="secondary" onClick={this.handleClickOpen}>삭제</Button>
            <Dialog open={this.state.open} onClose={this.handleClickClose}>
                <DialogTitle onClose={this.handleClickClose}>
                    삭제경고
                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        선택한 고객 정보가 삭제됩니다.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color="primary" onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</Button>
                    <Button variant='outlined' color="primary" onClick={this.handleClickClose}>닫기</Button>
                </DialogActions>
            </Dialog>
            </div>

        )
    }
}

export default CustomerDelete
