import Card from "./Card";
import Button from "./Button";
import classes from "./Error.module.css";
import reactDom from "react-dom";

const Backdrop = backDropProps => {
    return <div className={classes.backdrop} onClick={backDropProps.onClick} />
}
const ModelOverlay = modelProps => {
    return (
        <Card classname={classes.modal}>
            <header className={classes.header}>
            <h2>{modelProps.title}</h2>
            </header>
            <section className={classes.content}>
            <p>{modelProps.message}</p>
            </section>
            <footer className={classes.actions}>
            <Button onClick={modelProps.onClick} >Okay</Button>
            </footer>
        </Card>
    )
}
const ErrorModel = (props) => {
  return (
    <>
    {reactDom.createPortal(<Backdrop onClick={props.onOkayButtonClick}/>, document.getElementById('backdrop-root'))}
    {reactDom.createPortal(
        <ModelOverlay
            onClick={props.onOkayButtonClick}
            title={props.title}
            message={props.message}
        />, document.getElementById('overlay-root'))}
    </>
  );
};
export default ErrorModel;
