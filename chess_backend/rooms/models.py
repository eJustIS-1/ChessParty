from django.db import models

# Create your models here.
class Room(models.Model):
    room_name = models.CharField(max_length=255)
    nickname = models.CharField(max_length=255)
    game_mode = models.CharField(max_length=255)
    room_id = models.UUIDField(unique=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)