import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, onSnapshot } from 'firebase/firestore';
import { 
  CheckCircle2, 
  Circle, 
  Code2, 
  Database, 
  BrainCircuit, 
  Cpu, 
  Layout, 
 Rocket, 
  ChevronRight, 
  Calendar,
  Layers,
  Terminal,
  PlayCircle,
  Cloud,
  Loader2,
  Share2,
  Copy,
  Check
} from 'lucide-react';

// Firebase konfiguratsiyasi
const firebaseConfigStr = import.meta.env.VITE_FIREBASE_CONFIG || '{}';
const firebaseConfig = typeof firebaseConfigStr === 'string' ? JSON.parse(firebaseConfigStr) : firebaseConfigStr;const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = import.meta.env.VITE_APP_ID || 'default-app-id';
const roadmapData = [
  // ...existing code...
];

// ...existing code (App component, hooks, rendering, etc)...

export default App;
