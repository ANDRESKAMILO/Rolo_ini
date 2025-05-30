from diagrams import Diagram, Cluster
from diagrams.onprem.client import User
from diagrams.programming.language import JavaScript
from diagrams.programming.framework import React
from diagrams.onprem.compute import Server
from diagrams.generic.device import Mobile

# Genera la imagen del diagrama y la guarda como "arquitectura.png"
with Diagram("Arquitectura de ANARTECH Balta V1.0", filename="arquitectura", show=False, outformat="png"):
    
    usuario = User("Usuario")

    with Cluster("Frontend"):
        html = React("index.html")
        css = React("style.css")
        js = JavaScript("script.js")

    with Cluster("Archivos Estáticos"):
        img_balta = Server("pug_black.png")
        img_arquitecto = Server("balta_arquitecto.png")

    with Cluster("Documentación"):
        readme = Server("README.md")
        resumen = Server("RESUMEN.pdf")

    usuario >> html >> js >> css
    js >> img_balta
    js >> img_arquitecto
    usuario >> readme
    usuario >> resumen
