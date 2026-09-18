import './TextBeforCard.css'


export default function TextBeforCard({className , title , description , subTitle}) {
    return (
        <div className={`${className} rtTextCard`}>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{subTitle}</span>
        </div>
    )
}
