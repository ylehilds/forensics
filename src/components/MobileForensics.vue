<template>
  <!--<v-flex xs12 sm6 offset-sm3>-->
  <div>
    <h1>Mobile Forensics</h1>
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">MPE+</h3>
            <br />
            <div><span><b>Description:</b></span> <span>Used for mobile forensics.</span></div>
            <div><b>Personal notes on usage:</b>You need to have a valid FTK license in order to use this additional software. Connect your smartphone via usb, select the phone that best matches it. Then perform analysis, once analysis is done you can create reports and save data in an image that can be later opened by MPE+</div>
            <div><b>Personal review:</b>it is a great tool and I have found many data using this software.</div>
            <div><b>Source URL:</b> <a href="https://accessdata.com/product-download/mpe" target="_blank">https://accessdata.com/product-download/mpe</a></div>
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
            <h3 class="headline mb-0">ADB</h3>
            <br />
            <div><span><b>Description:</b></span> <span>Android Debug Bridge (adb) is a versatile command-line tool that lets you communicate with a device. The adb command facilitates a variety of device actions, such as installing and debugging apps, and it provides access to a Unix shell that you can use to run a variety of commands on a device.</span></div>
            <div><b>Personal review:</b> It is a great tool to gather android smart phone information. It is normally installed during the Android SDK installation, this is a must tool to have while analyzing android.</div>
            <div><b>Personal notes on usage:</b> Command line tool, just type 'adb devices -l', to see a list of devices connected. 'adb shell' to get a shell command prompt. Refer to documentation for all commands.</div>
            <div><b>Source URL:</b> <a href="https://developer.android.com/studio/command-line/adb.html" target="_blank">https://developer.android.com/studio/command-line/adb.html</a></div>
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
            <h3 class="headline mb-0">Santoku</h3>
            <br />
            <div><span><b>Description: </b>Santoku is an easy to use, Open Source platform, dedicated to mobile forensics, analysis, and security.</span> </div>
            <div><span><b>Personal review: </b>This is a great tool to quickly obtain some main data information from an android smartphone.</span> </div>
            <div><span><b>Personal notes on usage: </b> Download Santoku image, Create a VM and run AF Logical OSE.</span> </div>
            <div><b>Source URL:</b> <a href="https://sourceforge.net/projects/santoku/?source=typ_redirect" target="_blank">https://sourceforge.net/projects/santoku/?source=typ_redirect</a></div>
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
            <h3 class="headline mb-0">MobiSec</h3>
            <br />
            <div><span><b>Description: </b>This project was a DARPA CFT funded project that is now being released through OWASP. It is focused on providing a live environment for mobile security testing, forensics, reverse engineering and wireless analysis.</span> </div>
            <div><span><b>Personal review: </b>Good OS for mobile forensics.</span> </div>
            <div><span><b>Personal notes on usage: </b> Download MobiSec image, Create a VM and run appropriate tools to find data.</span> </div>
            <div><b>Source URL:</b> <a href="https://sourceforge.net/projects/mobisec/files/?source=navbar" target="_blank">https://sourceforge.net/projects/mobisec/files/?source=navbar</a></div>
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
            <h3 class="headline mb-0">SIFT Workstation</h3>
            <br />
            <div><span><b>Description: </b>The SIFT Workstation is a group of free open-source incident response and forensic tools designed to perform detailed digital forensic examinations in a variety of settings. It can match any current incident response and forensic tool suite. SIFT demonstrates that advanced incident response capabilities and deep dive digital forensic techniques to intrusions can be accomplished using cutting-edge open-source tools that are freely available and frequently updated.</span> </div>
            <div><span><b>Personal review: </b>Good OS for All Digital forensics in general.</span> </div>
            <div><span><b>Personal notes on usage: </b>Download VMware VM and run appropriate tools to find data.</span> </div>
            <div><b>Source URL:</b> <a href="https://digital-forensics.sans.org/community/downloads" target="_blank">https://digital-forensics.sans.org/community/downloads</a></div>
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
