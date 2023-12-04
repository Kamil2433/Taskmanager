import React from 'react'
import { useNotes } from '../Context/NotesContext'




export default function useAlertenvokefunction(mess) {


const {setmessage,setalert}=useNotes();


setalert(true)
setmessage(mess)


}
