
export function ExperianceBox(props) {
    const {title , subtitle , date , text} = props.content
    return (
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
      <div className="flex-grow-1">
        <h3 className="mb-0">{title}</h3>
        <div className="subheading mb-3">{subtitle}</div>
        <p>
          {text}
        </p>
      </div>
      <div className="flex-shrink-0">
        <span className="text-primary">{date}</span>
      </div>
    </div>
    )
}