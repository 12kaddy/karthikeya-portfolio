"use client";
import {useState} from "react";
import Link from "next/link";
import {Menu,X} from "lucide-react";
const links=[{href:"/#about",label:"About"},{href:"/#github",label:"GitHub"},{href:"/#projects",label:"Projects"},{href:"/#experience",label:"Experience"},{href:"/#skills",label:"Skills"},{href:"/#achievements",label:"Achievements"},{href:"/#certifications",label:"Certificates"},{href:"/#contact",label:"Contact"}];
export default function Navigation(){const[open,setOpen]=useState(false);return <header className="header"><div className="wrap nav"><Link className="wordmark" href="/">Karthikeya Mishra<span>.</span></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map(x=><Link href={x.href} key={x.href}>{x.label}</Link>)}</nav><button className="menu-button" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>{open&&<nav className="mobile-nav" aria-label="Mobile navigation">{links.map(x=><Link key={x.href} href={x.href} onClick={()=>setOpen(false)}>{x.label}</Link>)}</nav>}</header>}
