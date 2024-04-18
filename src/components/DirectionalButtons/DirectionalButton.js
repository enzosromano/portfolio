import "./DirectionalButton.css";

const DirectionalButton = ({ as, children, filled, secondary, ...rest }) => {
    const that = {
      as
    }
    return (
      <that.as className={`dir-control ${secondary ? 'dir-control--secondary' : ''} ${filled ? 'dir-control--filled' : ''}`} {...rest} >
        {children}
        <span/>
        <span/>
        <span/>
        <span/>
        <b aria-hidden="true">{children}</b>
        <b aria-hidden="true">{children}</b>
        <b aria-hidden="true">{children}</b>
        <b aria-hidden="true">{children}</b>
      </that.as>
    )
  }
  DirectionalButton.defaultProps = {
    as: 'button'
}

export default DirectionalButton;

//https://codepen.io/jh3y/pen/XWMobqx for buttons
