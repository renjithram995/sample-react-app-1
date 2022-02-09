import Card from "./Card";
import Button from "./Button";
import classes from "./Error.module.css";

const ErrorModel = (props) => {
  return (
    <>
        <div className={classes.backdrop} onClick={props.onOkayButtonClick} />
        <Card classname={classes.modal}>
            <header className={classes.header}>
            <h2>{props.title}</h2>
            </header>
            <section className={classes.content}>
            <p>{props.message}</p>
            </section>
            <footer className={classes.actions}>
            <Button onClick={props.onOkayButtonClick} >Okay</Button>
            </footer>
        </Card>
    </>
  );
};
export default ErrorModel;
