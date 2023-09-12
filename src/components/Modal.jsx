import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Modal({modalOpen, setModalOpen}){

    const handleClickOpen = () => {
        setModalOpen(true);
      };
    
      const handleClose = () => {
        setModalOpen(false);
      };

    return(
        <Dialog
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"로그인 실패"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            이메일 혹은 비밀번호를 확인해주세요.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>확인</Button>
        </DialogActions>
      </Dialog>
    )
}