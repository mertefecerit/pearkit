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
                        <td><BuiCode>type</BuiCode></td>
                        <td>string</td>
                        <td><BuiCode color="gray">button</BuiCode></td>
                        <td>Specifies the button type.</td>
                    </tr>
                    <tr>
                        <td><BuiCode>variant</BuiCode></td>
                        <td>string</td>
                        <td><BuiCode color="gray">basic</BuiCode></td>
                        <td>It can also take <BuiCode color="gray">outlined</BuiCode> and <BuiCode color="gray">text</BuiCode>.</td>
                    </tr>
                    <tr>
                        <td><BuiCode>color</BuiCode></td>
                        <td>string</td>
                        <td><BuiCode color="gray">blue</BuiCode></td>
                        <td>You can pass all tailwind css color palette colors as names.</td>
                    </tr>
                    <tr>
                        <td><BuiCode>size</BuiCode></td>
                        <td>string</td>
                        <td><BuiCode color="gray">base</BuiCode></td>
                        <td>It can also take <BuiCode color="gray">xs</BuiCode>, <BuiCode color="gray">sm</BuiCode>, <BuiCode color="gray">lg</BuiCode> and <BuiCode color="gray">xl</BuiCode> values.</td>
                    </tr>
                    <tr>
                        <td><BuiCode>isLoading</BuiCode></td>
                        <td>boolean</td>
                        <td><BuiCode color="gray">false</BuiCode></td>
                        <td>Required to check the loading status.</td>
                    </tr>
                    <tr>
                        <td><BuiCode>disabled</BuiCode></td>
                        <td>boolean</td>
                        <td><BuiCode color="gray">false</BuiCode></td>
                        <td>It is for the disable feature of the button.</td>
                    </tr>
                    <tr>
                        <td><BuiCode>children</BuiCode></td>
                        <td>node</td>
                        <td><BuiCode color="gray">null</BuiCode></td>
                        <td>You can give components as children.</td>
                    </tr>
                    <tr>
                        <td><BuiCode>startIcon</BuiCode></td>
                        <td>elementType</td>
                        <td><BuiCode color="gray">null</BuiCode></td>
                        <td>It can be placed before the child and given as a component.</td>
                    </tr>
                    <tr>
                        <td><BuiCode>endIcon</BuiCode></td>
                        <td>elementType</td>
                        <td><BuiCode color="gray">null</BuiCode></td>
                        <td>It is placed after child and can be given as a component. </td>
                    </tr>
                    <tr>
                        <td><BuiCode>href</BuiCode></td>
                        <td>string</td>
                        <td><BuiCode color="gray">null</BuiCode></td>
                        <td>Turns the button into "a" element.</td>
                    </tr>
                    <tr>
                        <td><BuiCode>target</BuiCode></td>
                        <td>string</td>
                        <td><BuiCode color="gray">_target</BuiCode></td>
                        <td>It changes the target property of the button whose button has been converted to "a" element.</td>
                    </tr>
                    <tr>
                        <td><BuiCode>onClick</BuiCode></td>
                        <td>function</td>
                        <td><BuiCode color="gray">null</BuiCode></td>
                        <td>Runs a function for the click event.</td>
                    </tr>
                    <tr>
                        <td><BuiCode>animation</BuiCode></td>
                        <td>boolean</td>
                        <td><BuiCode color="gray">true</BuiCode></td>
                        <td>t activates the click animation and takes <BuiCode color="gray">true</BuiCode> and <BuiCode color="gray">false</BuiCode> values.</td>
                    </tr>
                    <tr>
                        <td><BuiCode>raised</BuiCode></td>
                        <td>boolean</td>
                        <td><BuiCode color="gray">false</BuiCode></td>
                        <td>By adding a shadow to the button, it makes it appear above and takes true and false values.</td>
                    </tr>
                    <tr>
                        <td><BuiCode>rounded</BuiCode></td>
                        <td>boolean</td>
                        <td><BuiCode color="gray">false</BuiCode></td>
                        <td>Shows the button with rounded edges and takes the values <BuiCode color="gray">true</BuiCode> and <BuiCode color="gray">false</BuiCode>.</td>
                    </tr>
                    <tr>
                        <td><BuiCode>ariaLabel</BuiCode></td>
                        <td>string</td>
                        <td><BuiCode color="gray">button</BuiCode></td>
                        <td>It allows the value of the button's label accessibility option to be changed.</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </BuiComponentShowcaseArea>
    )
}

export default ApiButtonSection;