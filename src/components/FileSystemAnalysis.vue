<template>
  <!--<v-flex xs12 sm6 offset-sm3>-->
  <div>
    <h1>File System Analysis</h1>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Autopsy</h3>
            <br />
            <div><span><b>Description:</b></span> <span>is an easy to use, GUI-based program that allows you to efficiently analyze hard drives and smart phones. It has a plug-in architecture that allows you to find add-on modules or develop custom modules in Java or Python.</span></div>
            <div><b>Personal notes on usage:</b> Open Autopsy, Create a new case and Add image evidence or files for analysis</div>
            <div><b>Personal review:</b> It is a great tool to analyze images/files for forensics analysis, you can customize certain settings, if all settings are checked it takes a long time to fully analyze an image of course depending of how big the image is.</div>
            <div><b>Source URL:</b> <a href="http://www.sleuthkit.org/index.php" target="_blank">http://www.sleuthkit.org/index.php</a></div>
            <div><b>Local Source: </b> N/A</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">The Sleuth Kit</h3>
            <br />
            <div><span><b>Description:</b></span> <span>is a collection of command line tools and a C library that allows you to analyze disk images and recover files from them. It is used behind the scenes in Autopsy and many other open source and commercial forensics tools.</span></div>
            <div><b>Personal notes on usage:</b> It is a terminal command line tool, but mainly used in conjunction to Autopsy</div>
            <div><b>Personal review:</b> It is a great tool to use along Autopsy.</div>
            <div><b>Source URL:</b> <a href="http://www.sleuthkit.org/" target="_blank">http://www.sleuthkit.org/</a></div>
            <div><b>Local Source: </b> N/A</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">FTK</h3>
            <br />
            <div><span><b>Description:</b></span> <span>conduct faster searches and dramatically increase analysis speed with FTK®, the purpose-built solution that interoperates with mobile device and e-discovery technology. Powerful and proven, FTK processes and indexes data upfront, eliminating wasted time waiting for searches to execute. No matter how many different data sources you’re dealing with or the amount of data you have to cull through, FTK gets you there quicker and better than anything else.</span></div>
            <div><b>Personal review:</b>It is a great and most recognized Forensics tool in the field. This is a fantastic tool, it is a commercial tool, It finds artifacts quickly and faster than any other tool I've used.</div>
            <div><b>Personal notes on usage:</b>Open FTK, Create a new case and Add image evidence or files for analysis</div>
            <div><b>Source URL:</b> <a href="https://accessdata.com/products-services/forensic-toolkit-ftk" target="_blank">https://accessdata.com/products-services/forensic-toolkit-ftk</a></div>
            <div><b>Local Source: </b> N/A</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'MediaAnalysis',
  data () {
    return {
      // msg: 'Welcome to Packet Analysis view',
      // card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
