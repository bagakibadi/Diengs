<template>
  <div class="home accordion" role="tablist">

    <!--toggle pertama-->
    <div class="col-md-12 shadow p-2 mb-5 rounded">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" style="background:white" class="p-1" role="tab">
          <div block v-b-toggle.accordion-1 variant="info" style="background: white;outline: none">
            <div class="row">
              <div class="col-md-3" style="margin-top:20px">
                <img src='https://seeklogo.com/images/J/jne-express-new-2016-logo-375E58A33D-seeklogo.com.png' style="width:80px">
              </div>
              <div class="col-md-6" style="text-align:left">
                <b>JNE</b>
                <p>Regular Package| BEST |Cargo</p>
              </div>
              <div class="col-md-3">
              </div>
            </div>
          </div>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <!-- <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text> -->
            <b-card-text>
              <div class="row">
                <div class="col-md-12">
                </div>
              </div>
              <div class="row" style="margin-top:10px">
                <div class="col-md-2">
                  <button class="btn btn-warning form-control shadow rounded">Bayar Ditempat</button>
                </div>
                <div class="col-md-2">
                  <button class="btn btn-danger shadow rounded">Tokopedia Corner</button>
                </div>
              </div>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <!--toggle tutup pertama-->

    <!--toggle kedua-->
    <div class="col-md-12 shadow p-2 mb-5 rounded">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" style="background:white" class="p-1" role="tab">
          <div block v-b-toggle.accordion-2 variant="info" style="background: white;outline: none">
            <div class="row">
              <div class="col-md-3" style="margin-top:20px">
                <img src='https://seeklogo.com/images/J/jne-express-new-2016-logo-375E58A33D-seeklogo.com.png' style="width:80px">
              </div>
              <div class="col-md-6" style="text-align:left">
                <b>JNE</b>
                <p>Regular Package| BEST |Cargo</p>
              </div>
              <div class="col-md-3">
              </div>
            </div>
          </div>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <!-- <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text> -->
            <b-card-text>
              <div class="row">
                <div class="col-md-12">
                </div>
              </div>
              <div class="row" style="margin-top:10px">
                <div class="col-md-2">
                  <button class="btn btn-danger shadow rounded">Tokopedia Corner</button>
                </div>
                <div class="col-md-2">
                  <button class="btn btn-warning form-control shadow rounded">Bayar Ditempat</button>
                </div>
              </div>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <!--toggle tutup kedua-->

    <!--toggle ketiga-->
    <div class="col-md-12 shadow p-2 mb-5 rounded">
      <b-card no-body class="mb-1" >
        <b-card-header header-tag="header" style="background:white" class="p-1" role="tab">
          <div block v-b-toggle.accordion-3 variant="info" style="background: white;outline: none">
            <div class="row">
              <div class="col-md-3" style="margin-top:20px">
                <img src='https://seeklogo.com/images/J/jne-express-new-2016-logo-375E58A33D-seeklogo.com.png' style="width:80px">
              </div>
              <div class="col-md-6" style="text-align:left">
                <b>JNE</b>
                <p>Regular Package| BEST |Cargo</p>
              </div>
              <div class="col-md-3">
              </div>
            </div>
          </div>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <!-- <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text> -->
            <b-card-text>
              <div class="row">
                <div class="col-md-12">
                </div>
              </div>
              <div class="row" style="margin-top:10px">
                <div class="col-md-2">
                  <button class="btn btn-danger shadow rounded">Tokopedia Corner</button>
                </div>
                <div class="col-md-2">
                  <button class="btn btn-warning form-control shadow rounded">Bayar Ditempat</button>
                </div>
              </div>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <!--toggle tutup ketiga-->
  </div>
</template>

<script>
// @ is an alias to /src
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'Home',
  data () {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
    }
  }
}
</script>
