AFRAME.registerComponent('bowling-balls', {
    init: function(){
        this.throw()
    },
    throw: function(){
        window.addEventListener("keydown", (e)=>{
            if(e.key===" "){
                var ball=document.createElement('a-entity')
                ball.setAttribute("geometry",{primitive:'sphere',radius:0.3})
                ball.setAttribute("gltf-model","#bowling-ball")
                ball.setAttribute("scale","0.3 0.3 0.3")
                var camera=document.querySelector("#camera")
                var pos=camera.getAttribute("position")
                var dir=new THREE.Vector3()
                camera.object3D.getWorldDirection(dir)
                ball.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
                ball.setAttribute("velocity",dir.multiplyScalar(-10))
                ball.setAttribute("dynamic-body","mass:7.26")
                console.log(ball)
                var scene = document.querySelector("#scene")
                scene.appendChild(ball)
                setTimeout(()=>{
                    ball.parentNode.removeChild(ball)
                    ball.destroy()
                },10000)
            }
        })
    }
})