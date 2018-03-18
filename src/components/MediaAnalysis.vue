<template>
  <!--<v-flex xs12 sm6 offset-sm3>-->
  <div>
    <h1>Media Analysis</h1>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">file</h3>
            <br />
            <div><span><b>Description:</b></span> <span>Used to determine file's type.</span></div>
            <div><b>Personal notes on usage:</b> Open Wireshark, select the network adapter to observe, capture the network traffic, save to a file, you can add display filters as to target the packets of interest, for example "ip.addr == 192.0.2.1"</div>
            <div><b>Personal review:</b> It is a great tool to check for file's type.</div>
            <div><b>Source URL:</b> <a href="https://www.computerhope.com/unix/ufile.htm" target="_blank">https://www.computerhope.com/unix/ufile.htm</a></div>
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
            <h3 class="headline mb-0">Autopsy</h3>
            <br />
            <div><span><b>Description:</b></span> <span>It is a digital forensics platform and graphical interface to the Sleuth Kit and other forensics tools.</span></div>
            <div><b>Personal review:</b> It is a great GUI tool to perform media analysis.</div>
            <div><b>Personal notes on usage:</b> Run it from terminal and go to the URL address to access Autopsy tool. From there you can create a case and add evidence to the case, then analyze the evidence."</div>
            <div><b>Source URL:</b> <a href="https://www.sleuthkit.org/autopsy/" target="_blank">https://www.sleuthkit.org/autopsy/</a></div>
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
            <h3 class="headline mb-0">dd</h3>
            <br />
            <div><span><b>Description: </b>copies a file, converting the format of the data in the process.</span> </div>
            <div><span><b>Personal review: </b>Great tool to create images</span> </div>
            <div><span><b>Personal notes on usage: </b> From terminal use the following command: dd [inputFile] [outputFile] for example: dd if=/dev/sda of=~/disk1.img</span> </div>
            <div><b>Source URL:</b> <a href="https://www.computerhope.com/unix/dd.htm" target="_blank">https://www.computerhope.com/unix/dd.htm</a></div>
            <div><span><b>Local Source: </b> N/A</span> </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <br />
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">xxd</h3>
            <br />
            <div><span><b>Description: </b>Creates a hexdump of a given file or standard input.</span> </div>
            <div><span><b>Personal review: </b>Good tool to create a hexdump of a given file or standard input</span> </div>
            <div><span><b>Personal notes on usage: </b> From terminal use the following command: xxd [flags] [fileName] </span> </div>
            <div><b>Source URL:</b> <a href="http://www.tutorialspoint.com/unix_commands/xxd.htm" target="_blank">http://www.tutorialspoint.com/unix_commands/xxd.htm</a></div>
            <div><span><b>Local Source: </b> N/A</span> </div>
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
