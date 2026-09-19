
import './ReviewForm.css'
import { FONTS } from '../../assets/constants/fonts'
import { COLORS } from '../../assets/constants/colors'
import InputsField from '../InputsField/InputsField'
import TextareaField from '../TextareaField/TextareaField'
import Button from '../Button/Button'
import { useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { getItemFromLocalstorage, addToLocalstorage, updateLocalstorage } from '../../utils/localstorage'

// دالة مساعدة تحوّل الملف لـ base64
const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
    })
}

function ReviewForm() {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()

    const stateItem = location.state?.item
    const pathId = params.id
    const effectiveId = stateItem?.id || (pathId && !isNaN(pathId) ? pathId : null)
    const isEditMode = Boolean(effectiveId)
    const getInitialData = () => {
        if (stateItem) {
            return {
                title: stateItem.title || '',
                text: stateItem.text || '',
                fullName: stateItem.author || '',
                JobTitle: stateItem.authorTitle || '',
                image: stateItem.image || ''
            }
        }
        if (effectiveId) {
            const list = getItemFromLocalstorage("reviews") || []
            const current = list.find((el) => String(el.id) === String(effectiveId))
            if (current) {
                return {
                    title: current.title || '',
                    text: current.text || '',
                    fullName: current.author || '',
                    JobTitle: current.authorTitle || '',
                    image: current.image || ''
                }
            }
        }
        return { title: '', text: '', fullName: '', JobTitle: '', image: '' }
    }

    const [title, setTitle] = useState(() => getInitialData().title)
    const [text, setText] = useState(() => getInitialData().text)
    const [fullName, setName] = useState(() => getInitialData().fullName)
    const [JobTitle, setJob] = useState(() => getInitialData().JobTitle)
    const [image, setImage] = useState(() => getInitialData().image) // ملاحظة: بوضع التعديل، هي أصلاً base64 نص جاهز

    const handleSubmit = async (e) => {
        e.preventDefault()

        // let imageValue = image
        // if (image && typeof image !== 'string') {
        //     imageValue = await convertToBase64(image)
        // }

        const reviewData = {
            title,
            text,
            author: fullName,
            authorTitle: JobTitle,
            image: image
        }

        if (isEditMode) {
            updateLocalstorage("reviews", effectiveId, reviewData)
        } else {
            addToLocalstorage("reviews", reviewData)
        }
        navigate(-1)
    }
    return (
        <>
         <div className="faq-form-top-bar">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="faq-back-btn"
        >
          ← Back
        </button>
      </div>
            <form action="" style={{ display: "flex", flexDirection: "column", gap: 10 }} onSubmit={handleSubmit}>
                <div style={{ display: "flex", gap: 10 }} className='bh-row1'>
                    <InputsField
                        className="ReviewTitle"
                        widthField="50%"
                        labelField="Review Title"
                        inputType="Text"
                        labelId="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                    <TextareaField
                        className="bh-textarea"
                        labelName="Review Description"
                        width="50%"
                        value={text}
                        onChange={(e) => setText(e.target.value)} />
                </div>
                <div style={{ display: "flex", gap: 10 }} className='bh-row2'>
                    <InputsField
                        className=""
                        widthField="50%"
                        labelField="Full Name"
                        inputType="Text"
                        labelId="fullname"
                        value={fullName}
                        onChange={(e) => setName(e.target.value)} />

                    <InputsField
                        className=""
                        widthField="50%"
                        labelField="Job Title"
                        inputType="Text"
                        labelId="JobTitle"
                        value={JobTitle}
                        onChange={(e) => setJob(e.target.value)} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }} className='bh-row3'>
                    <InputsField
                        className=""
                        widthField="50%"
                        labelField="URL Profile Image"
                        inputType="text"
                        labelId="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        
                    />
                    <Button
                        type="submit"
                        name={isEditMode ? "Save Changes" : "Submit"}
                        width="149px"
                        height="63px"
                        fontSize="18px"
                        borderRadius="6px"
                        backgroundColor="var(--green50)"
                        color=" var(--grey15)"
                        border=""
                        className="bh-bn" />
                        <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="work-btn-action work-btn-cancel">
                                Cancel
                        </button>
                </div>
            </form>
        </>
    )
}
export default ReviewForm
