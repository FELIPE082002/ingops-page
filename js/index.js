window.addEventListener("DOMContentLoaded", main, false);

function main() {

    function tamVentana() {
        var tam = [0, 0];
        if (typeof window.innerWidth != 'undefined')
        {
            tam = [window.innerWidth,window.innerHeight];
        }
        else if (typeof document.documentElement != 'undefined'
            && typeof document.documentElement.clientWidth !=
            'undefined' && document.documentElement.clientWidth != 0)
        {
            tam = [
                document.documentElement.clientWidth,
                document.documentElement.clientHeight
            ];
        }
        else   {
            tam = [
                document.getElementsByTagName('body')[0].clientWidth,
                document.getElementsByTagName('body')[0].clientHeight
            ];
        }
        return tam;
    }

    function carousel(){
        let tamaño = tamVentana()
        let carousel = document.getElementById('Galeria')

        if(tamaño[0] < 575){
            carousel.innerHTML = `
            <div id="carouselExampleSlidesOnly" class="carousel slide"  data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="d-flex justify-content-center">
                            <img src="img/pagos/mastercard.png" class="d-block m-5" alt="..." width="150px">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex justify-content-center">
                            <img src="img/pagos/ame-express.png" class="d-block" alt="..." width="150px">
                        </div>     
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex justify-content-center">
                            <img src="img/pagos/visa.png" class="d-block" alt="..." width="150px">
                        </div>    
                    </div>
                </div>
            </div>
            <div id="carouselExampleSlidesOnly" class="carousel slide"  data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="d-flex justify-content-center">
                        <img src="img/pagos/baloto.png" class="d-block m-5" alt="..." width="150px">
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex justify-content-center">
                        <img src="img/pagos/efecty.png" class="d-block m-5" alt="..." width="150px">
                    </div>     
                </div>
                <div class="carousel-item">
                    <div class="d-flex justify-content-center">
                        <img src="img/pagos/via.png" class="d-block" alt="..." width="150px">
                    </div>    
                </div>
                <div class="carousel-item">
                    <div class="d-flex justify-content-center">
                        <img src="img/pagos/pse.png" class="d-block" alt="..." width="150px">
                    </div>    
                </div>
            </div>
        </div>
            `
        }
    }

    carousel()
    
}
    
