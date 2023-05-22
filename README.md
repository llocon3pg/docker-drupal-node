## Drupal Headless And Node

1. Enter the docker directory and run `docker-compose.yaml``.

2. Enter the route `localhost:8080` in the Drupal configuration.

3. When you get to the database configuration section, use the credentials in the YAML, and change the path from localhost to the name of the container, in this case `postgres`

4. Then finish the initial configuration of drupal

5. Within drupal go to the Content tab, and create one called article, which allows you to create text and image content.

6. In the extend tab, add the Restful UI, Restful API modules

7. If necessary, restart the server, it is usually not necessary.

8. Go to settings, and in the Rest part, activate the action of being able to consume content, there you can say which actions to activate, in this case only reading. The GET method

9. This should now be able to show you the consumed items in JSON format. Check the routes of this service to learn more.

10. For the list of articles, it is necessary to generate a view, this can be generated from Drupal or in the console, the intention is to list the articles published from the most recent onwards. Since Rest UI has already been added, from the view it can be given a PATH to access the view from an api consumer
