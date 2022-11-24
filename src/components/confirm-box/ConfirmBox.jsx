const ConfirmBox = ({type, message}) => {
    const [open, setOpen] = React.useState(true);
  
    const handleClose = () => {
      setOpen(false);
    };

    function TransitionUp(props) {
        return <Slide {...props} direction="up" />;
      }

    let color;
    switch (type) {
        case "Error":
            color = "red"
            break;
        case "Warning":
            color = "orange";
            break;
        case "Info":
            color = "blue";
            break
        case "Success":
            color = "green";
            break;
        default: 
            color = "white"
    }
    return (
        <>
            <Snackbar
            open={open}
            onClose={handleClose}
            TransitionComponent= {TransitionUp}
            message={message}
            ContentProps={{
                sx: {
                  background: color
                }
            }}
      />
        </>
    )
}
 export default ConfirmBox;