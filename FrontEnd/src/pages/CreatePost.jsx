import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {preview} from '../assets'
import  {getRandomPrompt} from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate(); 
  const [form, setform] = useState({
    name:'',
    prompt:'',
    photo:''
  });
  const [generatingImg, setgeneratingImg] = useState(false);
  const {loading, setLoading} = useState(false);
  const handleSubmit = () => {

  }
  const handleChange = (e) => {

  }
  const handleSurpriseMe = () => {

  }

  return (
    <section className=' max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Create</h1>
          <p className=' mt-2 text-[#666e75] text-[17px] mx-w-[500px]'>
            Create imaginative and visually stunning images through DALL-E AI
            and share them with community
          </p>
      </div>

      <form className=' mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className=' flex flex-col gap-5'>
          <FormField
          LabelName='Your name'
          type= 'text'
          name='name'
          placeholder='Jhon Doe'
          value={form.name}
          handleChange={handleChange}
          />
          <FormField
          Label='Prompt'
          type= 'text'
          name='prompt'
          placeholder='Spongebob Squarepants in the Blair Witch Project'
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  )
}

export default CreatePost
