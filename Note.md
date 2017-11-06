# Security vulnerblitys in third party packages 

 ### nsp 
 
  > Run scan using nsp check 
  
 * Current vulner
 


              Incorrect Handling of Non-Boolean Comparisons During Minification           

 Name           uglify-js                                                                   

 CVSS           8.3 (High)                                                                  

 Installed      2.2.5                                                                       

 Vulnerable     <= 2.4.23                                                                   

 Patched        >= 2.4.24                                                                   

 Path           jellyalert@0.0.0 > jade@1.11.0 > transformers@2.1.0 > uglify-js@2.2.5       

 More Info      https://nodesecurity.io/advisories/39                                       


              Regular Expression Denial of Service                                        

 Name           mime                                                                        

 CVSS           7.5 (High)                                                                  

 Installed      1.3.4                                                                       

 Vulnerable     < 1.4.1 || > 2.0.0 < 2.0.3                                                  

 Patched        >= 1.4.1 < 2.0.0 || >= 2.0.3                                                

 Path           jellyalert@0.0.0 > express@4.15.5 > send@0.15.6 > mime@1.3.4                

 More Info      https://nodesecurity.io/advisories/535                                      


              Regular Expression Denial of Service                                        

 Name           uglify-js                                                                   

 CVSS           5.3 (Medium)                                                                

 Installed      2.2.5                                                                       

 Vulnerable     <2.6.0                                                                      

 Patched        >=2.6.0                                                                     

 Path           jellyalert@0.0.0 > jade@1.11.0 > transformers@2.1.0 > uglify-js@2.2.5       

 More Info      https://nodesecurity.io/advisories/48      


## Snyk vulnerbillity scanner 

> Snyk helps you find, fix and monitor for known vulnerabilities in Node.js npm, Ruby and Java dependencies, both on an ad hoc basis and as part of your CI (Build) system.

To run: snyk test

output: 
✗ Low severity vulnerability found on mime@1.3.4
- desc: Regular Expression Denial of Service (ReDoS)
- info: https://snyk.io/vuln/npm:mime:20170907
- from: jellyalert@0.0.0 > express@4.15.5 > send@0.15.6 > mime@1.3.4
Upgrade direct dependency express@4.15.5 to express@4.16.0 (triggers upgrades to send@0.16.0 > mime@1.4.1)

✗ Low severity vulnerability found on mime@1.3.4
- desc: Regular Expression Denial of Service (ReDoS)
- info: https://snyk.io/vuln/npm:mime:20170907
- from: jellyalert@0.0.0 > express@4.15.5 > serve-static@1.12.6 > send@0.15.6 > mime@1.3.4
Upgrade direct dependency express@4.15.5 to express@4.16.0 (triggers upgrades to serve-static@1.13.0 > send@0.16.0 > mime@1.4.1)

✗ High severity vulnerability found on uglify-js@2.2.5
- desc: Improper minification of non-boolean comparisons
- info: https://snyk.io/vuln/npm:uglify-js:20150824
- from: jellyalert@0.0.0 > jade@1.11.0 > transformers@2.1.0 > uglify-js@2.2.5
No direct dependency upgrade can address this issue.
Run `snyk wizard` to explore remediation options.

✗ Medium severity vulnerability found on uglify-js@2.2.5
- desc: Regular Expression Denial of Service (DoS)
- info: https://snyk.io/vuln/npm:uglify-js:20151024
- from: jellyalert@0.0.0 > jade@1.11.0 > transformers@2.1.0 > uglify-js@2.2.5
No direct dependency upgrade can address this issue.
Run `snyk wizard` to explore remediation options.

Tested 239 dependencies for known vulnerabilities, found 3 vulnerabilities, 4 vulnerable paths.