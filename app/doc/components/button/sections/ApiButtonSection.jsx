"use client"
import BuiComponentShowcaseArea from "@/app/components/BuiComponentShowcaseArea";
import BuiCode from "@/app/components/BuiCode";
import styles from "../page.module.scss";

function ApiButtonSection(props) {
    return (
        <BuiComponentShowcaseArea
            anchor="api"
            title="Api"
            desc={<>Here you can see all the working features for the button.</>}
        >
            <div className={styles.apiWrapperTable}>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>type</td>
                        <td><BuiCode>string</BuiCode></td>
                        <td><BuiCode color="gray">button</BuiCode></td>
                        <td>Buton tipini belirler</td>
                    </tr>
                    <tr>
                        <td>variant</td>
                        <td><BuiCode>string</BuiCode></td>
                        <td><BuiCode color="gray">basic</BuiCode></td>
                        <td>3 değer alır basic, outlined ve text</td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td><BuiCode>string</BuiCode></td>
                        <td><BuiCode color="gray">blue</BuiCode></td>
                        <td>Tüm tailwindcss renk paleti renklerini isim olarak geçebilirsiniz.</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td><BuiCode>string</BuiCode></td>
                        <td><BuiCode color="gray">base</BuiCode></td>
                        <td>varsayılan olarak base'dir, xs,sm,lg ve xl değerlerinide alabilir.</td>
                    </tr>
                    <tr>
                        <td>isLoading</td>
                        <td><BuiCode>boolean</BuiCode></td>
                        <td><BuiCode color="gray">false</BuiCode></td>
                        <td>Loading durumunu kontrol edebilmek için gerekli</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td><BuiCode>boolean</BuiCode></td>
                        <td><BuiCode color="gray">false</BuiCode></td>
                        <td>Buton durumunu belirtir true, false değerlerini alır.</td>
                    </tr>
                    <tr>
                        <td>children</td>
                        <td><BuiCode>node</BuiCode></td>
                        <td><BuiCode color="gray">null</BuiCode></td>
                        <td>Butona child eleman verebilirsiniz.</td>
                    </tr>
                    <tr>
                        <td>startIcon</td>
                        <td><BuiCode>elementType</BuiCode></td>
                        <td><BuiCode color="gray">null</BuiCode></td>
                        <td>başlangıç ikon koyabilirsiniz component destekler</td>
                    </tr>
                    <tr>
                        <td>endIcon</td>
                        <td><BuiCode>elementType</BuiCode></td>
                        <td><BuiCode color="gray">null</BuiCode></td>
                        <td>bitiş ikon koyabilirsiniz component destekler</td>
                    </tr>
                    <tr>
                        <td>href</td>
                        <td><BuiCode>string</BuiCode></td>
                        <td><BuiCode color="gray">null</BuiCode></td>
                        <td>Buton'u link elemente çevirir ve href ekler</td>
                    </tr>
                    <tr>
                        <td>target</td>
                        <td><BuiCode>string</BuiCode></td>
                        <td><BuiCode color="gray">_target</BuiCode></td>
                        <td>link element olan butonun target özelliğini değiştirir</td>
                    </tr>
                    <tr>
                        <td>onClick</td>
                        <td><BuiCode>function</BuiCode></td>
                        <td><BuiCode color="gray">null</BuiCode></td>
                        <td>tıklama olayı için bir fonksiyon çalıştırır</td>
                    </tr>
                    <tr>
                        <td>animation</td>
                        <td><BuiCode>boolean</BuiCode></td>
                        <td><BuiCode color="gray">true</BuiCode></td>
                        <td>Tıklama animasyonunu devreye sokar true, false değerleri alır</td>
                    </tr>
                    <tr>
                        <td>raised</td>
                        <td><BuiCode>boolean</BuiCode></td>
                        <td><BuiCode color="gray">false</BuiCode></td>
                        <td>button'a gölge ekleyerek yukarıda gözükmesini sağlar true, false değerleri alır.</td>
                    </tr>
                    <tr>
                        <td>rounded</td>
                        <td><BuiCode>boolean</BuiCode></td>
                        <td><BuiCode color="gray">false</BuiCode></td>
                        <td>button'u yuvarlak kenarlı gösterir true ve false değerlerini alır</td>
                    </tr>
                    <tr>
                        <td>ariaLabel</td>
                        <td><BuiCode>string</BuiCode></td>
                        <td><BuiCode color="gray">button</BuiCode></td>
                        <td>Button'un erişebilirlik seçeneği olan değerin değişmesini sağlar.</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </BuiComponentShowcaseArea>
    )
}

export default ApiButtonSection;