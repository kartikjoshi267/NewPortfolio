import React from 'react'
import {
  ReactOriginal,
  COriginal,
  NodejsOriginal,
  CplusplusOriginal,
  ExpressOriginal,
  MongodbOriginal,
  JavascriptOriginal,
  TypescriptOriginal,
  PythonOriginal,
  Html5Original,
  Css3Original,
  SassOriginal,
  AmazonwebservicesOriginalWordmark,
  DockerPlain,
  GitOriginal,
  TailwindcssPlain,
  BootstrapPlain,
  MysqlOriginalWordmark,
  FlaskOriginal,
  JavaOriginal,
  JupyterOriginalWordmark,
  SocketioOriginal,
} from 'devicons-react'

const icons = [
  ReactOriginal,
  COriginal,
  NodejsOriginal,
  CplusplusOriginal,
  ExpressOriginal,
  MongodbOriginal,
  JavascriptOriginal,
  TypescriptOriginal,
  PythonOriginal,
  Html5Original,
  Css3Original,
  SassOriginal,
  AmazonwebservicesOriginalWordmark,
  DockerPlain,
  GitOriginal,
  TailwindcssPlain,
  BootstrapPlain,
  MysqlOriginalWordmark,
  FlaskOriginal,
  JavaOriginal,
  JupyterOriginalWordmark,
  SocketioOriginal,
]

const Skills = () => {
  return (
    <div className="flex flex-row flex-wrap lg:gap-7 gap-4">
      {icons.map((Icon, index) => (
        <Icon key={index} size={50} className="bg-white rounded-full p-2" />
      ))}
    </div>
  )
}

export default Skills
