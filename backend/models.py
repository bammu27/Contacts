from config import db

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    f_name = db.Column(db.String(50), unique=False, nullable=False)
    l_name = db.Column(db.String(50), unique=False, nullable=False)
    email = db.Column(db.String(50), unique=False, nullable=False)



    

    def to_json(self):
        return {
            'id': self.id,
            'fName': self.f_name,
            'lName': self.l_name,
            'email': self.email,
        }
