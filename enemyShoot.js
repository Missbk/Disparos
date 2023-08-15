AFRAME.registerComponent("enemy-bullets", {
    init: function () {
        setInterval(this.shootEnemyBullet, 2000)
    },
    shootEnemyBullet: function () {
//obtén los enemigos usando el nombre de la clase
var els=document.querySelectorAll(".enemy");
for(var i=0; i<els.length;i++){
    //entidad de baja enemiga
    var enemyBullet=document.createElement("a-entity");
    enemyBullet.setAttribute("geometry",{
        primitive:"sphere",
        radius:0.1,
    });

    enemyBullet.setAttribute("material","color","#282829");

    var position=els[i].getAttribute("position",{
    x:position.x+1.5,
    y:position.y+3.5,
    z:position.z,
   })
   var scene=document.querySelector("#scene");
   scene.appendChild(enemyBullet);

        //Three.js Vector Variables
            var enemy=els[i].object3D;
            var player =document.querySelector("#weapon").object3D

            //Obtener la posición del enemigo y jugador usando el método Three.js 
          player.getWorldPosition(position1);
          enemy.getWorldPosition(position2);

            //Establecer la velocidad y su dirección
            var direction =new THREE.Vector3();
            direction.subVectors(position1,position2).normalize();
            enemyBullet.setAttribute("velocity", direction.multyplyScalar(10) )
            
            //Establecer el atributo del cuerpo dinámico
            enemyBullet.setAttribute("dynamic-body", {
                shape: "sphere",
                mass: "0",
            });

            //Obtener atributo de texto
            

            //Evento de colisión con las balas enemigas
            enemyBullet.addEventListener("collide", function (e) {
                if (e.detail.body.el.id === "weapon") {
                    if(playerLife>0){
                        playerLife-=1;
                        element.setAttribute("text",{
                            value:playerLife
                        })
                    }

                    //Agrega las condiciones aquí
}
        
    },

});