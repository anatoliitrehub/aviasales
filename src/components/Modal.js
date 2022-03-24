

function Modal() {

    return(

    <div id="myModal" className="modal">

        {/* Modal content */}
        <div className="modal-content">
            <span className="close">&times;</span>
            <p>Please, input your personal data</p>

            <form>
                <div className="cont">
                    <table>
                        <tr>
                            <td className="one">e-mail</td>
                            <td><input type="text" className="mail persdata" required="required" /></td>
                        </tr>
                        <tr>
                            <td className="one">Phone number</td>
                            <td><input type="text" className="phone persdata" required /></td>
                        </tr>
                        <tr>
                            <td className="one">First name</td>
                            <td><input type="text" class="firstname persdata" required /></td>
                        </tr>
                        <tr>
                            <td className="one">Second name</td>
                            <td><input type="text" class="secondname persdata" required /></td>
                        </tr>
                        <tr>
                            <td className="one">Passport number</td>
                            <td><input type="text" class="passportnumber persdata" required /></td>
                        </tr>
                        <tr>
                            <td className="one"></td>
                            <td>
                                <div>Total your trip price is:<span className="out"></span></div>
                            </td>
                        </tr>
                    </table>
                </div>

                <p><input type="submit" value="Confirm" /></p>
            </form>
            <div class="cont">

            </div>
        </div>
    </div>

    );
}

export default Modal;