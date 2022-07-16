import React from "react";
import { useState } from "react";
import TabelBuku from "./TabelBuku";

function ManajemenBuku() {
    // PART DATA
    const [formMode, setFormMode] = useState("");

    // PART EVENT HANDLING
    function showCreateForm() {
        setFormMode("show")
    }
    function showEditForm(){
        setFormMode("show")
    }
    return (
        <div className="container mt-3">
            <h1 className="text-center">Manajemen Buku</h1>

            <button className="btn btn-sm btn-primary my-2" onClick={showCreateForm}>
                Tambah Buku
            </button>

            {/* input form*/}
            {formMode === "show" && (
                <div id="form" className="card py-2 my-3 bg-secondary">
                    <div className="card-body">
                        <h4>Form Buku</h4>
                        <form className="row">
                            <div className="col-6">
                                <input
                                    type="text" 
                                    name="judul"
                                    className="form-control mx-2"
                                    placeholder="Judul..."
                                />
                            </div>
                            <div className="col-4">
                                <input
                                    type="text" 
                                    name="judul"
                                    className="form-control mx-2"
                                    placeholder="Pengarang..."
                                />
                            </div>
                            <div className="col-2">
                                <input type="submit" className="btn btn-success" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {/* tabel data buku */}
            <TabelBuku showEdit={showEditForm} />
        </div>
    )
}

export default ManajemenBuku;