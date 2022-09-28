# Hearing Test

- Deploy at https://miblue119.github.io/hearing_test

## TODO
 
- [ ] Render hearing test audio with slider 
- [ ] Record the selected result 
- [ ] Generate the audiogram


## Usage 

1. Run the code at local
```
$npm run start 
```

2. Deploy the code to remote `gh-page` branch
  - Push the code to remote first 
    ```
    $git push
    ```
  - And run this command to deploy
    ```
    $npm run deploy
    ```

----
## Resources

- [How to deploy react web to github?](https://rexhung0302.github.io/2021/09/28/20210928/)
    1. Install `gh-pages`: `$ npm i gh-pages` 
    2. Append two cmd at `package.json`
        ```
        "scripts": {
          "start": "react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test",
          "eject": "react-scripts eject",
          "predeploy": "npm run build",  # New added cmd
          "deploy": "gh-pages -d build"  # New added cmd
        }        
        ```
    3. Append your homepage and app-name at package.json
        ```
          "homepage": "https://miblue119.github.io/hearing_test"
        ```
    4. Deploy to github's repo `gh-pages`
        ```
        $ npm run build
        ```
- Install pkg 
  ```
  $npm i <pkg>
  ```

## Hearing Test Resources

- [Online Audiogram Hearing Test (125 Hz - 8 kHz)](https://www.audiocheck.net/testtones_hearingtestaudiogram.php)
    - [ISO 389-7:2005
Acoustics — Reference zero for the calibration of audiometric equipment — Part 7: Reference threshold of hearing under free-field and diffuse-field listening conditions](https://www.iso.org/standard/38976.html)
- [Online Hearing Test and Audiogram Printout](https://hearingtest.online/)
- [6 best online hearing tests](https://www.hearsoundly.com/guides/best-online-hearing-tests)
    1. [Lively - Free 5 Minute Test With Video Results Explanation](https://imp.i351785.net/c/2451848/1383559/11795)
    2. [Eargo - 7 Minute Test With Sound Calibration and Questionnaire](https://www.eargo.com/hearing-health/hearing-screener?utm_source=hearsoundly&utm_campaign=src93-cnl14-spnd01-cmp01)
    3. [Audicus - 10 Minute Test With a Simple Interface](https://mintchip.mintmeasure.com/api/c?campid=110201&medium=affiliate&mid=110000&redirect=https%3A%2F%2Fwww.audicus.com%2Fonline-hearing-test%2F%3Futm_source%3Dsoundly&sid=soundly&utm_medium=Affiliate)
    4. [Soundly - Test Time 5 Minutes, Audiogram-Style Results](https://www.soundly.com/hearing-test)
    5. [3 Minute Online Test With Interactive Chart](https://hearingtest.online/)

