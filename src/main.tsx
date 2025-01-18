import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import {moduleInit} from "./Modules/ModuleInit.ts";

moduleInit()
createRoot(document.getElementById('root')!).render(<App />)
