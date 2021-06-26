import React from 'react'
import "./styles/Posts.css"

export default function Posts() {
    return (
        <div class="fondoTodo">
            <div class="perfil">
                <div class="imagenPerfil">
                    <img src="https://i78.servimg.com/u/f78/20/31/61/87/foto10.png" alt="" class="imagen"/>
                </div>
                <div class="descripcion">
                    <text class="nombrePerfil">Yarriba Castro</text>
                    <text class="trabajoPerfil">Design Track</text>
                    <text class="descripcionPerfil">I chose design track because I love to design beautiful user-centered interfaces.</text>
                    <div class="redes">
                        <img src="https://i78.servimg.com/u/f78/20/31/61/87/linke10.png" alt="" class="logoLinked"/>
                        <img src="https://i78.servimg.com/u/f78/20/31/61/87/insta10.png" alt="" class="logoInstagram"/>
                        <text class="linked">Yaretas24</text>
                        <text class="instagram">Yaretas24</text>
                    </div>
                </div>
            </div>
        </div>
    )
}
