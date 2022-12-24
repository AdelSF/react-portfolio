import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import LinkJson from '../../../assets/json/imgLinks.json';
import allRandomLinks from '../../../assets/json/allRandomLinks.json';
import img from '../../../assets/img/Other/background-design.png';
import { Link } from 'react-router-dom';
import Galleria from './Galleria';


export default function Galleries(){

  const [currModelId, setCurrModelId] = useState(Number);

  

    return (
        <>  
            <Galleria />
        </>
    );
}

const H1 = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
`


const modelData = [
  {
    "id": 0,
    "topImg": "https://icecube-us-302.icedrive.io/thumbnail?p=9p23U%2FTKKGwjgumLgOm9CdYcgFl5jesRlCdNXKkfLdszYwb3rp9jYjxSAX9Ox9ZXNXUwnjdfAC3fklHlgOHu768qe7%2FZ59Fi9h863G0vl3fMH1de7leVule6BPTDRm%2Fx&w=1280&h=1280&m=cropped",
    "moreImgs": [
      "https://icecube-us-302.icedrive.io/thumbnail?p=C%2FyJ0R0j2ss2FLldqpMGoMMsj%2B9CQCXdSUIufXqB1nYksC4URKfaS9JJ6A18uzP4%2BsrTRgppn2ZL2WzhlJum17ZivSQ7TfY7vzoFFg%2FcIQWVmWha7T2dW78u4%2Fo1Z1s2&w=1280&h=1280&m=cropped",
      "https://icecube-us-302.icedrive.io/thumbnail?p=LrPNLUNgZ0y%2FIBqaW0cwejJ5REW86Y09PQA8o%2FAEN0DArMEFegFfY5R%2Bser28ynk6EubJCW%2Ffb4%2BD105n%2BBmXvHRXceEb%2F6%2BfZ8Y0xNB0rZkJIJIgnUiwkA%2FRX5xRUDb&w=1280&h=1280&m=cropped",
      "https://icecube-us-302.icedrive.io/thumbnail?p=mvLCzsrM2Fl616tb9bjynwwGGOqnOWBTpdjypjG2eicngLN2pEFOy9KX6zrOqnmlTk3zvIOQmdXpa1rOUWrydK9QEvtv33jsTPKt1yFBdinoLk8VLMfPaae8xVp4jbFL&w=1280&h=1280&m=cropped",
      "https://icecube-us-302.icedrive.io/thumbnail?p=VNgHMMBL22Sz7AQSW3pB1IfEAh5Pi29UQp6%2B2lvLQMc6LGxl8vWa8IXxgT2OrbuqrRTvwgs0EX0hCLeZGETJ4pudMpRQvaDBhPVMY5KXNzsdjj%2B9GO7UmBBNcunscBSP&w=1280&h=1280&m=cropped",
    ]
  }, 
  {
    "id": 1,
    "topImg": "https://icecube-us-303.icedrive.io/thumbnail?p=K6A169VcEs2dUv%2FJx3hdJgwPPiiyK%2FIyAeI5ZMgK3x1zlTD1nRun0qsHRvXgOgc9taHQzTY%2FvB8W2XQXlunn01cJPYNSrGpPqmtVB6T5OEN8hJfHFeTmpvOU3dimcKC1&w=1280&h=1280&m=cropped",
    "moreImgs": [
      "https://icecube-us-303.icedrive.io/thumbnail?p=smKhtVd2k4h9THSWd0UwW%2FVbVX9treTxP6Q9lpS0UPv9%2BoJIaPL0p3SbKEAo4ZWUVW8XaW7TMaRAtuT123gr84ejyfhrHqzB4WclD2gcgRQHrwu2jSDLLBJTCCoKKepm&w=1280&h=1280&m=cropped",
      "https://icecube-us-303.icedrive.io/thumbnail?p=3nUCwaabEqgyuWnvFVggc5hXW%2BE4Ecv9yM4PsB5SfZQ%2F9srsBGYHZkNl6WlCDO2T9vzJ5ScjnIvj4Gcz6kf6WQw1i0yFVS%2BAF0IiiVf1UWNsGdADlH0i%2FEoqAN0%2F0yo%2B&w=1280&h=1280&m=cropped",
      "https://icecube-us-303.icedrive.io/thumbnail?p=unYnaBryRZgGeWzXG3zs%2Fk1BkNc4xaV0xlgH1SpqAcQ1guyL%2F5N8qCPg6SzURtUvK3JnZSkMSbhpPQE4l%2FdUhqdXn1qGy%2BV0CLC1qjYHDv%2FrAVyVwo26pFetUhzTeUGi&w=1280&h=1280&m=cropped",
    ]
  }, 
  {
    "id": 2,
    "topImg": "https://icecube-us-301.icedrive.io/thumbnail?p=E0Y854B079s%2FYzfpI8GTnssG2gnko2EUE52%2FYBr2ZLfnPBP2qpbHDSdyx%2F0xhoKzpM2yfbN7VCj2SgseI0hHDh7Sh81h6o8LkClrmSlugaz9jHLdJLqCjEueojk4WPl5&w=1280&h=1280&m=cropped",
    "moreImgs": [
      "https://icecube-us-303.icedrive.io/thumbnail?p=7kZxfYyxVp4xQsPIjR%2F4pxJBhgYYRnzpdmXXGatNosBvJZvbQm6vS4vwDPWwA09Gylb%2BRTCjnJSnA46f4odsZCeCEGxDRpvHSlYoApjuuRwu7PUU16YKne9zRMSYxwA1&w=1280&h=1280&m=cropped",
      "https://icecube-us-301.icedrive.io/thumbnail?p=%2BdB%2FHRfheVaFQ1aXA%2F8w9bI4NzyVWMKBs9f93%2F2n2NdzvXq5A%2FEV1oUgluRNwQZBvIGq9K5b785uejz4roM%2BlbeIyvr8KHZsr55cmZVevYha2CT2yrCTg7bfUSnl23%2Bk&w=1280&h=1280&m=cropped",
    ]
  },
  {
    "id": 3,
    "topImg": "https://icecube-us-300.icedrive.io/thumbnail?p=T%2FUc8Pu%2F3IKe8x5gnmtJCnr2fGKcukj9dBEBv2UirspUYrOyG52kZ%2FiSpQPX6AGW656PgKPbrgpAIuze5HVEpZsjVAveQ3TN2LJwSBwoMPOMiqC2siJ5Hq3ioys61Ses&w=1280&h=1280&m=cropped",
    "moreImgs": [
      "https://icecube-us-301.icedrive.io/thumbnail?p=wJzwqEK%2BwuA5bHEtMs5%2FRSyMtrHpK7%2FG7PuHFwwEOVy5IOQKrzeFKtUboR%2BFtrglcvLehkgg0noew1x6wbwB3Pk3Nku562tU5cUImeJh6iAmZj5kiW8B88ADZF8MPdyS&w=1280&h=1280&m=cropped",
      "https://icecube-us-302.icedrive.io/thumbnail?p=5aLjxxEK8EwuRblPUYniL%2FCGgWW2xoWxp0tPD7nNWPklH8Jkn%2BBoBsa6bdbBNZscTybELgiDzr5yDuL1Rq3x57xK0JNO4PcFgBVb11JNFoO%2FubyWIzMHKPvEgX0CzHOD&w=1280&h=1280&m=cropped",
      "https://icecube-us-301.icedrive.io/thumbnail?p=ZMeaL1EhgtOiSqOMy1mYCxkA3DzRFDw1V6itxHk9XxO%2Fkb3%2FFdYuuCBXtIEmseaCrqJutVdFefikSYwsQPrvX6IaQruxIGjaHdvOU7lyTdQ2HqHP9yofu5H%2B5YPydMDv&w=1280&h=1280&m=cropped",
    ]
  },
  {
    "id": 4,
    "topImg": "https://icecube-us-302.icedrive.io/thumbnail?p=lr6ye6B6ektwQM.cZxSs_4h1IT8YZFv_T1DPOr44mjOIJdw.CryvOv._3IlyfyX8t.rwIgT.qEkD2IUGHuQ3yWJjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped",
    "moreImgs": [
      "https://icecube-us-302.icedrive.io/thumbnail?p=9usygzXAosoatLlDkZojceq1El_crWd1dTr1rf7M65ExM4b8vY4Afzfhd9YQiVHkqfEL3hmAXbsoz4CkCuehmmJjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped",
      "https://icecube-us-302.icedrive.io/thumbnail?p=uq2yEX8BLdLqHcuB7XI6zxNfL3X5_HKM7ajbZhlI3eEEuwGwHGZovi9VoP3Wwd07D8kJeCbSmLiYDPjQdjL9hGJjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped",
    ]
  },
  {
    "id": 5,
    "topImg": "https://icecube-us-300.icedrive.io/thumbnail?p=JKUnPT021xKofEn3UR1hhIXzPQAEgTVz9jHXp8LfPbaQgqxCQVJ.Y3aOlVYEHHo6AZQVOqEym6upk_mKGqKWbGJjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped",
    "moreImgs": [
      "https://icecube-us-300.icedrive.io/thumbnail?p=M0iSrfzq8pu2mGr8iK9CQoU6NdnxaZ6Qu5M2Kn04c3tOiodtt.yFGEZV49Xf3S2f2QG28fnNuRlxymfd4mpMsmJjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped",
      "https://icecube-us-300.icedrive.io/thumbnail?p=MLK.6K0Y5Q3jkYU6i2IGlnbb53u.thOoWG0FW7d6AOk.B9K_vsxyqzAhDNT9IuBFFyWExpWmo39kVFOWJ8MXcGJjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped"
    ]
  }
]