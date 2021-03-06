# Built-ins
import json

# Flask
from flask import Flask

with open('settings/secrets.json') as secrets_file:
    secrets = json.load(secrets_file)

VERSION = '0.1.0'
app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

if secrets['PRODUCTION']:
    app.config.from_object('config.ProductionConfig')
else:
    app.config.from_object('config.TestingConfig')

# Modify Jinja2
from controllers.jinja_filters import setup_jinja_filters
setup_jinja_filters(app)
    
# Logging
from controllers.interaction_logger import setup_logging
setup_logging(app)

# Assets
from controllers.assets import assets

# Email
from flask_mail import Mail
mail = Mail(app)

import controllers
