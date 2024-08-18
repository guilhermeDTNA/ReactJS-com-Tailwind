import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useEffect, useState } from "react";

const ModalMUI = () => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 2000);

        setTimeout(handleClose, 8000)
    }, [])

    function handleClose(){
        setShow(false);
    }

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
          children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
      ) {
        return <Slide direction="down" ref={ref} {...props} />;
    });

    return(
        <>
            <Dialog
                open={show}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                closeAfterTransition={true}
                PaperProps={{
                    style: {
                        position: "absolute",
                        top: "30px",
                        margin: 0
                    }
                }}
            >
                <Box className="">
                    <DialogActions onClick={handleClose}>
                        X
                    </DialogActions>
                
                    <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                    </DialogContent>
                </Box>
                
            </Dialog>
        </>
    )
}

export default ModalMUI;