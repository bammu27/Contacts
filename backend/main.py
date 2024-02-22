from config import db,app
from models import Contact
from flask import request, jsonify


@app.route('/',methods=['GET'])
def get_contacts():
    constacts = Contact.query.all()
    json_contacts = [contact.to_json() for contact in constacts]
    return jsonify({"contacts":json_contacts})



@app.route('/create_contact',methods=['POST'])
def create_contact():
    f_name = request.json.get('fName')
    l_name = request.json.get('lName')
    email = request.json.get('email')

    if not f_name or not l_name or not email:
        return jsonify({"Message":" Include all fields"}),400
    
    contact = Contact(f_name=f_name,l_name=l_name,email=email)
    try:
        db.session.add(contact)
        db.session.commit()
    except Exception as e:
        return jsonify({"Message":str(e)}),400
    
    return jsonify({"Message":"Contact created"}),201


@app.route('/update_contact/<int:id>',methods=['PUT'])
def update_contact(id):
    contact = Contact.query.get(id)
    if not contact:
        return jsonify({"Message":"Contact does not exist"}), 400
    
    data = request.json
    
    if 'fName' in data:
        contact.f_name = data['fName']
    if 'lName' in data:
        contact.l_name = data['lName']
    if 'email' in data:
        contact.email = data['email']
    
    db.session.commit()
    return jsonify({"Message":"Contact updated"}), 200



@app.route('/delete_contact/<int:id>',methods=['DELETE'])

def delete_contact(id):
    contact = Contact.query.get(id)
    if not contact:
        return jsonify({"Message":"Contact is not exist"}),400
    db.session.delete(contact)
    db.session.commit()
    return jsonify({"Message":"Contact deleted"}),200





if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)